using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AgendaMedica.Model
{
    public class Consulta
    {
        public int Id { get; set; }
        public DateTime HoraInicio { get; set; }
        public DateTime HoraFim { get; set; }
        public string Observacao { get; set; }

        public Paciente Paciente { get; set; }
    }
}
