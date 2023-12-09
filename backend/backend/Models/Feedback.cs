using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
	public class Feedback
	{
		[Required]
		[Key]
		public int Id { get; set; }
		FeedbackType Type { get; set; }
		public string? Description { get; set; }
	}

	public enum FeedbackType
	{
		/// <summary>
		/// Lt.: Pagyrimas
		/// </summary>
		Praise,
		/// <summary>
		/// Lt.: Pastaba
		/// </summary>
		Note,
		/// <summary>
		/// Lt.: Nusiskundimas
		/// </summary>
		Complaint
	}
}
