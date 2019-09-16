using AgendaMedica.Model;
using AgendaMedica.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace AgendaMedica.Controllers
{
    [Route("api/[controller]")]
    public class ConsultaController : Controller
    {
        private readonly IConsultaRepository _consultaRepositorio;

        public ConsultaController(IConsultaRepository consultaRepo)
        {
            _consultaRepositorio = consultaRepo;
        }

        [HttpGet]
        public IEnumerable<Consulta> GetAll()
        {
            return _consultaRepositorio.GetAll();
        }

        [HttpGet("{id}", Name ="GetConsulta")]
        public IActionResult GetById(long id)
        {
            var consulta = _consultaRepositorio.Find(id);
            if (consulta == null)
                return NotFound();

            return new ObjectResult(consulta);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Consulta consulta)
        {   
            if (consulta == null)
                return BadRequest();

            _consultaRepositorio.Add(consulta);

            return CreatedAtRoute("GetConsulta", new { id = consulta.Id }, consulta);
        }

        [HttpPut("{id}")]
        public IActionResult Update (long id, [FromBody] Consulta consulta)
        {
            if (consulta == null || consulta.Id != id)
                return BadRequest();

            var _consulta = _consultaRepositorio.Find(id);

            if (_consulta == null)
                return NotFound();

            _consulta.HoraInicio = consulta.HoraInicio;
            _consulta.HoraFim = consulta.HoraFim;
            _consulta.Observacao = consulta.Observacao;
            _consulta.Paciente = consulta.Paciente;

            _consultaRepositorio.Update(_consulta);

            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete (long id)
        {
            var consulta = _consultaRepositorio.Find(id);

            if (consulta == null)
                return NotFound();

            _consultaRepositorio.Remove(id);

            return new NoContentResult();
        }
    }
}
