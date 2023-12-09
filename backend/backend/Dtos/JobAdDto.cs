namespace backend.Dtos;

public record JobAdDto(int Id, string? Title, DateTime? Date, string? Description, string? Salary, DateTime? Duration);

public record CreateJobAdDto(string? Title, DateTime? Date, string? Description, string? Salary, DateTime? Duration);

public record UpdateJobAdDto(string? Title, DateTime? Date, string? Description, string? Salary, DateTime? Duration);