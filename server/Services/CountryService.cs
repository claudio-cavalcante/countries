using System.Collections.Generic;
using WebApi.Entities;
using WebApi.Services.Interfaces;

namespace WebApi.Services
{
    public class CountryService : ICountryService
    {
        private List<Country> _countries = new List<Country>
        {
            new Country
            {
                Id = "1",
                Name = "Brazil",
                Capital = "Brasília",
                Area = null,
                Population = 200_000_000,
                PopulationDensity = null
            }
        };

        public IEnumerable<Country> GetAll()
        {
            return _countries;
        }

        public void Save(Country country)
        {
            _countries.Add(country);
        }
    }
}