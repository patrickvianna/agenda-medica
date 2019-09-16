using AgendaMedica.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AgendaMedica.Repository
{
    public interface IConsultaRepository
    {
        void Add(Consulta consulta);

        IEnumerable<Consulta> GetAll();

        Consulta Find(long id);

        void Remove(long id);

        void Update(Consulta consulta);
    }
}
