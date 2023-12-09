using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace backend.Models
{
	public class Task
	{
		[Required]
		[Key]
		public int Id { get; set; }
		public string? Title { get; set; }
		public DateTime? Start { get; set; }
		public DateTime? End { get; set; }
		public string? Description { get; set; }
	}
}
