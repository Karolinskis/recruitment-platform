using backend.Models;
using System.Data;

namespace backend.Dtos
{
	public class AuthenticateResponse
	{
		public int Id { get; set; }
		public string? FirstName { get; set; }
		public string? LastName { get; set; }
		public RoleStatus Role { get; set; }
		public string? Token { get; set; }

		public AuthenticateResponse(User user, string token)
		{
			Id = user.Id;
			FirstName = user.FirstName;
			LastName = user.LastName;
			Role = user.Role;
			Token = token;
		}
	}
}
