using backend.Data;
using backend.Models;
using backend.Helpers;

using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Filters;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
	options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
	{
		Description = "Standard Authorization header using the Bearer scheme. Example: \"bearer {token}\"",
		In = ParameterLocation.Header,
		Name = "Authorization",
		Type = SecuritySchemeType.Http,
		Scheme = "Bearer"
	});

	options.OperationFilter<SecurityRequirementsOperationFilter>();
});

builder.Services.AddCors(option => option.AddPolicy(name: "RecruitmentPlatform",
	policy =>
	{
		policy.WithOrigins("http://localhost:5173").AllowAnyMethod().AllowAnyHeader().AllowCredentials();
	}));

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
	.AddJwtBearer(options =>
	{
		options.TokenValidationParameters = new TokenValidationParameters
		{
			ValidateIssuerSigningKey = true,
			IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
				builder.Configuration.GetSection("AppSettings:Secret").Value ?? "NotFound")),
			ValidateIssuer = false,
			ValidateAudience = false
		};
	});

builder.Services.AddDbContext<DataContext>(options =>
{
	options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
	new MySqlServerVersion(new Version(8, 0, 25)));
});

builder.Services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));
builder.Services
	.AddScoped<IUserRepository, UserRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
	app.UseSwagger();
	app.UseSwaggerUI();
	app.UseCors();
}

app.UseHttpsRedirection();
app.UseCors("RecruitmentPlatform");
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
