using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace backend.Models
{
	public class User
	{
		[Required]
		[Key]
		public int Id { get; set; }
		[Required]
		[MaxLength(50)]
		public string? FirstName { get; set; }
		[Required]
		[MaxLength(50)]
		public string? LastName { get; set; }
		public string? Gender { get; set; }
		[MaxLength(100)]
		public string? City { get; set; }
		[Required]
		[EmailAddress]
		public string? Email { get; set; }
		[Phone]
		public string? PhoneNumber { get; set; }
		[Required]
		public string? Password { get; set; }
		public DateTime? BirthdayDate { get; set; }
		[Url]
		public string? LinkedInUrl { get; set; }
		public DateTime? CreationDate { get; set; }
		public bool Verified { get; set; }
		public DateTime? BlockedDate { get; set; }
		[Required]
		public RoleStatus Role { get; set; }
	}

	public enum RoleStatus
	{
		Admin,
		Employee,
		Employer
	}
}
