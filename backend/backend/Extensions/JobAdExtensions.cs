using backend.Dtos;
using backend.Models;

namespace backend.Extensions;

public static class JobAdExtensions
{
	public static JobAdDto ToDto(this JobAd ad)
		=> new JobAdDto
		(
			ad.Id,
			ad.Title,
			ad.Date,
			ad.Description,
			ad.Salary,
			ad.Duration
		);

	public static IEnumerable<JobAdDto> ToDto(this IEnumerable<JobAd> ads)
		=> ads.Select(x => x.ToDto()).ToList();
}
