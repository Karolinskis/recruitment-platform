using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
	/// <summary>
	/// Skelbimo anketa
	/// </summary>
	public class WorkerAd
	{
		[Required]
		public int Id { get; set; }
		public string? Name { get; set; }
		public string? Description { get; set; }
		public double? HourlyWage { get; set; }
		public bool? Verified { get; set; }
	}
}
