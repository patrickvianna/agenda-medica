import { EditarPacienteModule } from './editar-paciente.module';

describe('EditarPacienteModule', () => {
  let editarPacienteModule: EditarPacienteModule;

  beforeEach(() => {
    editarPacienteModule = new EditarPacienteModule();
  });

  it('should create an instance', () => {
    expect(editarPacienteModule).toBeTruthy();
  });
});
