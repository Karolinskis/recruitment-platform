using backend.Dtos;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Data;
using MimeKit;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace backend.Data
{
	public class UserRepository : IUserRepository
	{
		private DataContext _context;
		private readonly IConfiguration _configuration;

		public UserRepository(DataContext context, IConfiguration configuration)
		{
			_context = context;
			_configuration = configuration;
		}

		public void Register(RegisterDto model)
		{
			// Validation
			if (_context.Users.Any(x => x.Email == model.Email))
				throw new Exception("Email '" + model.Email + "' is already taken");

			// Map model to new user object
			User user = new User
			{
				FirstName = model.FirstName,
				LastName = model.LastName,
				Email = model.Email,
				Role = RoleStatus.Employee,
				Verified = false,
				CreationDate = DateTime.Now,

				// Hash password
				Password = BCrypt.Net.BCrypt.HashPassword(model.Password)
			};
			// Save user
			_context.Users.Add(user);
			_context.SaveChanges();
		}

		public User GetByEmail(string email)
		{
			return _context.Users.FirstOrDefault(x => x.Email == email);
		}

		public User GetById(int id)
		{
			return _context.Users.FirstOrDefault(x => x.Id == id);
		}

		public void Edit(EditDto model, User user)
		{
			if (_context.Users.Any(x => x.PhoneNumber == model.PhoneNumber))
				throw new Exception("Phone number '" + model.PhoneNumber + "' is already taken");

			user.FirstName = model.FirstName;
			user.LastName = model.LastName;
			user.Email = model.Email;
			user.PhoneNumber = model.PhoneNumber;
			user.BirthdayDate = model.BirthdayDate;
			user.LinkedInUrl = model.LinkedInUrl;

			SaveChanges(user);
		}



		public AuthenticateResponse Login(LoginDto model)
		{
			var user = _context.Users.SingleOrDefault(x => x.Email == model.Email);

			// Validate
			if (user == null || !BCrypt.Net.BCrypt.Verify(model.Password, user.Password))
				throw new Exception("Email or password is incorrect");

			// Authentication successful so generate jwt token
			var token = CreateToken(user);

			return new AuthenticateResponse(user, token);
		}

		public User GetAllUsers()
		{
			throw new NotImplementedException();
		}

		public void SaveChanges(User user)
		{
			_context.Users.Update(user);
			_context.SaveChanges();
		}

		private string CreateToken(User user)
		{
			List<Claim> claims = new List<Claim>
			{
				new Claim(ClaimTypes.Name, user.Email!),
				new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
				new Claim(ClaimTypes.Role, user.Role.ToString())
			};
			var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
				_configuration.GetSection("AppSettings:Token").Value!));
			var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
			var Token = new JwtSecurityToken(
				claims: claims,
				expires: DateTime.Now.AddDays(1),
				signingCredentials: creds
			);
			var jwt = new JwtSecurityTokenHandler().WriteToken(Token);
			return jwt;
		}
	}
}
