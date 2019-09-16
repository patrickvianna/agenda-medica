using AgendaMedica.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AgendaMedica.Repository
{
    public interface IPacienteRepository
    {
        void Add(Paciente paciente);

        IEnumerable<Paciente> GetAll();

        Paciente Find(long id);

        void Remove(long id);

        void Update(Paciente paciente);
    }
}
