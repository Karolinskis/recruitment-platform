using System.ComponentModel.DataAnnotations;

namespace backend.Dtos
{
	public class LoginDto
	{
		[Required]
		public string? Email { set; get; }
		[Required]
		public string? Password { set; get; }
	}
}
