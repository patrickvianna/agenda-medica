using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AgendaMedica.Model;
using Infrastructure.DBConfiguration.EFCore;

namespace AgendaMedica.Repository
{
    public class PacienteRepository : IPacienteRepository
    {
        private readonly ApplicationContext _contexto;

        public PacienteRepository(ApplicationContext ctx)
        {
            _contexto = ctx;
        }

        public void Add(Paciente paciente)
        {
            _contexto.Paciente.Add(paciente);
            _contexto.SaveChanges();
        }

        public Paciente Find(Int64 id)
        {
            return _contexto.Paciente.FirstOrDefault(p => p.Id == id);
        }

        public IEnumerable<Paciente> GetAll()
        {
            return _contexto.Paciente.ToList();
        }

        public void Remove(Int64 id)
        {
            var entity = _contexto.Paciente.First(p => p.Id == id); 
            _contexto.Paciente.Remove(entity);
            _contexto.SaveChanges();
        }

        public void Update(Paciente paciente)
        {
            _contexto.Paciente.Update(paciente);
            _contexto.SaveChanges();
        }
    }
}
