using backend.Dtos;
using backend.Extensions;
using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
	public class JobAdController : Controller
	{
		private readonly IJobAdRepository _jobAdRepository;
		private readonly DataContext _context;

		public JobAdController(IJobAdRepository jobAdRepository)
		{
			_jobAdRepository = jobAdRepository;
		}

		[HttpGet]
		public async Task<IEnumerable<JobAdDto>> GetAll()
		{
			var jobAds = await _jobAdRepository.GetAllAsync();

			return jobAds.ToDto();
		}

		public async Task<IActionResult> Get(int id)
		{
			var jobAd = await _jobAdRepository.GetAsync(id);

			if (jobAd is null) return NotFound();

			return Ok(jobAd.ToDto());
		}

		[HttpPost]
		public async Task<IActionResult> Create(CreateJobAdDto dto)
		{
			var jobAd = new JobAd()
			{
				Title = dto.Title,
				Date = DateTime.Now,
				Description = dto.Description,
				Salary = dto.Salary,
				Duration = dto.Duration
			};

			await _context.SaveChangesAsync();

			return Ok(jobAd.ToDto());
		}

		[HttpPost("{adId:int}")]
		public async Task<ActionResult<JobAdDto>> Update(int adId, UpdateJobAdDto dto)
		{
			var jobAd = await _jobAdRepository.GetAsync(adId);

			if (jobAd is null) return NotFound();

			jobAd.Title = dto.Title;
			jobAd.Description = dto.Description;
			jobAd.Salary = dto.Salary;
			jobAd.Duration = dto.Duration;

			await _jobAdRepository.SaveChangesAsync();

			return Ok(jobAd.ToDto());
		}

		[HttpDelete("{adId:int}")]
		public async Task<IActionResult> Delete(int adId)
		{
			var jobAd = await _jobAdRepository.GetAsync(adId);

			if (jobAd is null) return NotFound();

			await _jobAdRepository.DeleteAsync(jobAd);

			return NoContent();
		}
	}
}
