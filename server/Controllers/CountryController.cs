using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApi.Entities;
using WebApi.Services.Interfaces;

namespace WebApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class CountryController : ControllerBase
    {
        private ICountryService _countryService;

        public CountryController(ICountryService countryService)
        {
            _countryService = countryService;
        }

        [HttpPost]
        public IActionResult Save([FromBody] Country country)
        {
            _countryService.Save(country);
            return Ok();
        }


        [HttpGet]
        public IActionResult GetAll()
        {
            var countries = _countryService.GetAll();
            return Ok(countries);
        }
    }
}
