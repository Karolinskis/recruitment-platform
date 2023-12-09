using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
	/// <summary>
	/// Užimtumo grafikas
	/// </summary>
	public class AvailabilitySchedule
	{
		[Required]
		public int Id { get; set; }
		public string? Name { get; set; }
		public DateTime? Start { get; set; }
		public DateTime? End { get; set; }
	}
}
