using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
	public class Photo
	{
		[Required]
		public int Id { get; set; }
		public string? Url { get; set; }
		public string? Name { get; set; }
		public string? AltText { get; set; }
	}
}
