import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';
import SearchByStateService from './SearchByStateService';
import DeleteAppointmentService from './DeleteAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to delete appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(fakeAppointmentsRepository);
    const searchByStateService = new SearchByStateService(fakeAppointmentsRepository);
    const deleteAppointmentService = new DeleteAppointmentService(fakeAppointmentsRepository);

    const appointment = await createAppointment.execute({
      date: String(new Date()),
      recipient: 'Wagner',
      message: 'Teste',
    });

    await deleteAppointmentService.execute({
      id: appointment.id
    });

    const searchAppointment = await searchByStateService.execute({
      id: appointment.id
    });

    expect(searchAppointment?.id).toBe(undefined);
  });
})
