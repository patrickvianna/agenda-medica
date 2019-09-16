using AgendaMedica.Model;
using AgendaMedica.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace AgendaMedica.Controllers
{
    [EnableCors("AllowSpecificOrigin")]
    [Route("api/[controller]")]
    public class PacienteController : Controller
    {
        private readonly IPacienteRepository _pacienteRepositorio;

        public PacienteController(IPacienteRepository pacienteRepo)
        {
            _pacienteRepositorio = pacienteRepo;
        }

        [HttpGet]
        public IEnumerable<Paciente> GetAll()
        {
            return _pacienteRepositorio.GetAll();
        }

        [HttpGet("{id}", Name ="GetPaciente")]
        public IActionResult GetById(long id)
        {
            var paciente = _pacienteRepositorio.Find(id);
            if (paciente == null)
                return NotFound();

            return new ObjectResult(paciente);
        }

        [EnableCors]
        [HttpPost]
        public IActionResult Create([FromBody] Paciente paciente)
        {   
            if (paciente == null)
                return BadRequest();

            _pacienteRepositorio.Add(paciente);

            return CreatedAtRoute("GetPaciente", new { id = paciente.Id }, paciente);
        }

        [HttpPut("{id}")]
        public IActionResult Update (long id, [FromBody] Paciente paciente)
        {
            if (paciente == null || paciente.Id != id)
                return BadRequest();

            var _paciente = _pacienteRepositorio.Find(id);

            if (_paciente == null)
                return NotFound();

            _paciente.Nome = paciente.Nome;
            _paciente.DataNascimento = paciente.DataNascimento;

            _pacienteRepositorio.Update(_paciente);

            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete (long id)
        {
            var paciente = _pacienteRepositorio.Find(id);

            if (paciente == null)
                return NotFound();

            _pacienteRepositorio.Remove(id);

            return new NoContentResult();
        }
    }
}
