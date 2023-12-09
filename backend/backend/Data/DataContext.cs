using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data
{
	public class DataContext : DbContext
	{
		public DataContext(DbContextOptions<DataContext> options) : base(options) { }
		public DbSet<User> Users { get; set; }
		public DbSet<Photo> Photos { get; set; }
		public DbSet<Skill> Skills { get; set; }
		public DbSet<Notification> Notifications { get; set; }
		public DbSet<Models.Task> Tasks { get; set; }
		public DbSet<JobAd> JobAds { get; set; }
	}
}
