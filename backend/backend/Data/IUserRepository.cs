using backend.Dtos;
using backend.Models;

namespace backend.Data
{
	public interface IUserRepository
	{
		void Register(RegisterDto model);
		User GetByEmail(string email);
		User GetById(int id);
		void Edit(EditDto model, User user);
		AuthenticateResponse Login(LoginDto model);
		User GetAllUsers();
	}
}
