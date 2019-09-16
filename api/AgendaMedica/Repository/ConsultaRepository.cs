using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AgendaMedica.Model;
using Infrastructure.DBConfiguration.EFCore;

namespace AgendaMedica.Repository
{
    public class ConsultaRepository : IConsultaRepository
    {
        private readonly ApplicationContext _contexto;

        public ConsultaRepository(ApplicationContext ctx)
        {
            _contexto = ctx;
        }

        public void Add(Consulta Consulta)
        {
            _contexto.Consulta.Add(Consulta);
            _contexto.SaveChanges();
        }

        public Consulta Find(Int64 id)
        {
            return _contexto.Consulta.FirstOrDefault(p => p.Id == id);
        }

        public IEnumerable<Consulta> GetAll()
        {
            return _contexto.Consulta.ToList();
        }

        public void Remove(Int64 id)
        {
            var entity = _contexto.Consulta.First(p => p.Id == id); 
            _contexto.Consulta.Remove(entity);
            _contexto.SaveChanges();
        }

        public void Update(Consulta Consulta)
        {
            _contexto.Consulta.Update(Consulta);
            _contexto.SaveChanges();
        }
    }
}
