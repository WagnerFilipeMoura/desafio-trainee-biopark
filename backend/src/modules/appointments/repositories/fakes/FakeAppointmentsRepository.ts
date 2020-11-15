import { uuid } from 'uuidv4';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';

import Appointment from '../../infra/typeorm/entities/Appointment';
import { parseISO } from 'date-fns';

class AppointmentsRepository implements IAppointmentsRepository {
  private appointments: Appointment[] = [];

  public async create({
    date,
    recipient,
    message,
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = new Appointment();

    const dateParsed = parseISO(String(date));

    Object.assign(appointment, {
      id: uuid(),
      date: dateParsed,
      recipient,
      message,
      state: "SCHEDULE"
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

