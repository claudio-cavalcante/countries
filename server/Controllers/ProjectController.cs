using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class ProjectController : ControllerBase
    {
        private const string PROJECT_URL = "https://github.com/claudio-cavalcante/countries";

        /// <summary>
        /// Get the URL of the project's repository.
        /// </summary>
        /// <returns>The URL of the project's repository.</returns>
        [AllowAnonymous]
        [HttpGet]
        public string GetProjectURL()
        {
            return PROJECT_URL;
        }
    }
}
