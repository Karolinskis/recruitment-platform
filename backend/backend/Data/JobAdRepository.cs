using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;
public class JobAdRepository : IJobAdRepository
{
	private readonly DataContext _context;

	public JobAdRepository(DataContext context)
	{
		_context = context;
	}

	public async System.Threading.Tasks.Task AddAsync(JobAd ad)
	{
		await _context.AddAsync(ad);

		await _context.SaveChangesAsync();
	}

	public async System.Threading.Tasks.Task DeleteAsync(JobAd ad)
	{
		_context.JobAds
			.Remove(ad);
		await _context.SaveChangesAsync();
	}

	public async Task<List<JobAd>> GetAllAsync()
	{
		return await _context.JobAds
			.ToListAsync();
	}

	public async Task<JobAd?> GetAsync(int id)
	{
		return await _context.JobAds
			.FirstOrDefaultAsync(x => x.Id == id);
	}

	public async System.Threading.Tasks.Task SaveChangesAsync()
	{
		await _context.SaveChangesAsync();
	}
}
