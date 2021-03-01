using System.Collections.Generic;
using System.Threading.Tasks;
using WebApi.Entities;

namespace WebApi.Services.Interfaces
{
    public interface ICountryService
    {
        Task<Country> SaveAsync(Country country);

        IEnumerable<Country> GetAll();
    }
}
