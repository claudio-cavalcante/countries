﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using System;
using System.Threading.Tasks;
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

        /// <summary>
        /// Add or update a country.
        /// </summary>
        /// <returns>A newly created country.</returns>
        /// <response code="200">Returns the newly created item</response>
        /// <response code="400">If the item is null</response>
        [HttpPost]
        public async Task<IActionResult> Save([FromBody] Country country)
        {
            try
            {
                var newCountry = await _countryService.SaveAsync(country);

                return Ok(newCountry);
            }
            catch(Exception ex)
            {
                return BadRequest();
            }
            
        }

        /// <summary>
        /// Get all countries.
        /// </summary>
        /// <returns>Return all countries that were modified.</returns>
        [HttpGet]
        public IActionResult GetAll()
        {
            var countries = _countryService.GetAll();
            return Ok(countries);
        }
    }
}
