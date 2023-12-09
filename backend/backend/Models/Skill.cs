using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
	public class Skill
	{
		[Required]
		public int Id { get; set; }
		public string? Name { get; set; }
		public string? Certificate { get; set; }
	}
}
