using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
	public class Order
	{
		[Required]
		[Key]
		public int Id { get; set; }
		public string? Name { get; set; }
		public string? Description { get; set; }
		public DateTime? Start { get; set; }
		public DateTime? End { get; set; }
	}
}
