import { getRepository, Repository } from 'typeorm';

import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';

import Appointment from '../entities/Appointment';

class AppointmentsRepository implements IAppointmentsRepository {
  private ormRepository: Repository<Appointment>;

  constructor() {
    this.ormRepository = getRepository(Appointment);
  }

  public async create({
    date,
    recipient,
    message,
    state
  }: ICreateAppointmentDTO): Promise<Appointment> {
    const appointment = this.ormRepository.create({
      date,
      recipient,
      message,
      state
    })

    await this.ormRepository.save(appointment);

    return appointment;
  }

  public async searchByState(
    id: string
  ): Promise<Appointment | undefined> {
    const findAppointment = await this.ormRepository.findOne(id);

    return findAppointment;
  }

  public async removeAppointment(
    id: string
  ): Promise<void> {
    await this.ormRepository.delete(id);

    return;
  }
}

export default AppointmentsRepository;

