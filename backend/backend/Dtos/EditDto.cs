using System.ComponentModel.DataAnnotations;

namespace backend.Dtos
{
	public class EditDto
	{
		[MaxLength(50)]
		public string? FirstName { get; set; }
		[MaxLength(50)]
		public string? LastName { get; set; }
		public string? Gender { get; set; }
		public string? Email { get; set; }
		[Phone]
		public string? PhoneNumber { get; set; }
		public DateTime? BirthdayDate { set; get; }
		[Url]
		public string? LinkedInUrl { get; set; }
	}
}
