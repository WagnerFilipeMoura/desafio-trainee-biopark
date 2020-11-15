import { uuid } from 'uuidv4';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';

import Appointment from '../../infra/typeorm/entities/Appointment';

class AppointmentsRepository implements IAppointmentsRepository {
  private appointments: Appointment[] = [];

  public async create({
    date,
    recipient,
    message,
    state
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = new Appointment();

    Object.assign(appointment, {
      id: uuid(),
      date,
      recipient,
      message,
      state
    });

    this.appointments.push(appointment);

    return appointment;
  }

  public async searchByState(
    id: string
  ): Promise<Appointment | undefined> {
    const searchAppointment = this.appointments.find(
      appointment => appointment.id === id
    );

    return searchAppointment
  }

  public async removeAppointment(
    id: string
  ): Promise<void> {
    const removeAppointment = this.appointments.filter(
      appointment => appointment.id !== id
    );

    this.appointments = removeAppointment;

    return
  }
}

export default AppointmentsRepository;

