import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';
import SearchByStateService from './SearchByStateService';

describe('CreateAppointment', () => {
  it('should be able to shearch state appointment to id', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(fakeAppointmentsRepository);
    const searchByStateService = new SearchByStateService(fakeAppointmentsRepository);

    const appointment = await createAppointment.execute({
      date: String(new Date()),
      recipient: 'Wagner',
      message: 'Teste',
    });

    const searchAppointment = await searchByStateService.execute({
      id: appointment.id
    });

    expect(searchAppointment?.state).toBe('SCHEDULE');
  });
})
