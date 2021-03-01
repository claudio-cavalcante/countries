using System.ComponentModel.DataAnnotations;

namespace WebApi.Entities
{
    public class Country
    {
        [Required]
        public string Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Capital { get; set; }

        public float? Area { get; set; }

        [Required]
        public int Population { get; set; }

        public float? PopulationDensity { get; set; }
    }
}
