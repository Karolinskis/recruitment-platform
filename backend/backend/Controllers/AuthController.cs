using backend.Data;
using backend.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace backend.Controllers
{
	[Authorize]
	[Route("api")]
	[ApiController]
	public class AuthController : Controller
	{
		private readonly IUserRepository _repository;
		public AuthController(IUserRepository repository)
		{
			_repository = repository;
		}
		[AllowAnonymous]
		[HttpPost("register")]
		public IActionResult Register(RegisterDto dto)
		{
			try
			{
				_repository.Register(dto);
			}
			catch (System.Exception ex)
			{
				return Conflict(new { message = ex.Message });
			}
			return Ok(new { message = "User created successfully" });
		}
		[AllowAnonymous]
		[HttpPost("[action]")]
		public IActionResult Login(LoginDto dto)
		{
			try
			{
				var response = _repository.Login(dto);
				var cookieOptions = new CookieOptions
				{
					HttpOnly = true,
					Expires = DateTime.Now.AddDays(1)
				};
				Response.Cookies.Append("jwt", response.Token, cookieOptions);
				return Ok(response);
			}
			catch (Exception ex)
			{
				return Conflict(new { message = ex.Message });
			}
		}
		[HttpPost("[action]")]
		public IActionResult GetMe()
		{
			var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
			var user = _repository.GetById(Convert.ToInt16(userId));
			return Ok(user);
		}

		[Authorize(Roles = "Admin")]
		[HttpPost("[action]")]
		public IActionResult GetAllUsers()
		{
			var users = _repository.GetAllUsers();
			return Ok(users);
		}

		[HttpPost("[action]")]
		public IActionResult Logout()
		{
			Response.Cookies.Delete("jwt");
			return Ok(new { message = "User logged out successfully" });
		}
	}
}
