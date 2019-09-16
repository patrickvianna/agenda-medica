using AgendaMedica.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Infrastructure.DBConfiguration.EFCore
{
    public class ApplicationContext : DbContext
    {
        /* Creating DatabaseContext without Dependency Injection */
        public ApplicationContext() { }
        
        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {

        }

        public DbSet<Paciente> Paciente { get; set; }
        public DbSet<Consulta> Consulta { get; set; }
    }
}
