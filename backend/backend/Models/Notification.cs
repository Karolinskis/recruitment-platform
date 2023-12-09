using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
	public class Notification
	{
		[Required]
		public int Id { get; set; }
		public DateTime? Date { get; set; }
		public string? Name { get; set; }
		public string? ShortDescription { get; set; }
		public string? LongDescription { get; set; }
	}
}
