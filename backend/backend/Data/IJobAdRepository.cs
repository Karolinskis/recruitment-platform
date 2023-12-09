using backend.Models;

namespace backend.Data;

public interface IJobAdRepository
{
	public Task<List<JobAd>> GetAllAsync();
	public Task<JobAd?> GetAsync(int id);
	public System.Threading.Tasks.Task DeleteAsync(JobAd post);
	public System.Threading.Tasks.Task AddAsync(JobAd post);
	public System.Threading.Tasks.Task SaveChangesAsync();
}