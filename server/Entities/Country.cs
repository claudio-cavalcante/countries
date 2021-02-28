namespace WebApi.Entities
{
    public class Country
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string Capital { get; set; }

        public float? Area { get; set; }

        public int Population { get; set; }

        public float? PopulationDensity { get; set; }
    }
}
