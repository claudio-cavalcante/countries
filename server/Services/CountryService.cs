using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Data;
using WebApi.Entities;
using WebApi.Services.Interfaces;

namespace WebApi.Services
{
    public class CountryService : ICountryService
    {
        private ApplicationDbContext _context;

        public CountryService(ApplicationDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Country> GetAll()
        {
            return _context.Country.ToList();
        }

        public async Task<Country> SaveAsync(Country country)
        {
            if (string.IsNullOrEmpty(country.Id))
            {
                throw new Exception("Id cannot be empty!");
            }

            var persisted = _context.Country.FirstOrDefault(x => x.Id == country.Id);
            if (persisted == null)
            {
               await _context.Country.AddAsync(country);
            }
            else
            {
                _context.Entry(persisted).CurrentValues.SetValues(country);
            }
            
            await _context.SaveChangesAsync();

            return country;
        }
    }
}