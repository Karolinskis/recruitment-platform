using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
	public class JobAd
	{
		[Required]
		[Key]
		public int Id { get; set; }
		public string? Title { get; set; }
		public DateTime? Date { get; set; }
		public string? Description { get; set; }
		public string? Salary { get; set; }
		public DateTime? Duration { get; set; }
	}
}
