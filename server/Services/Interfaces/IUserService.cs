using System.Collections.Generic;
using System.Threading.Tasks;
using WebApi.Entities;

namespace WebApi.Services.Interfaces
{
    public interface IUserService
    {
        Task<User> Authenticate(string username, string password);

        Task<IEnumerable<User>> GetAll();
    }
}
