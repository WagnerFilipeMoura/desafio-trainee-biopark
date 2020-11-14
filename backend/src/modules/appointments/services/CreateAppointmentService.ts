import { isBefore, startOfHour, isDate, parseISO, format } from "date-fns";
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  date: Date;
  recipient: string;
  message: string;
}

@injectable()
class CreateAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({
    date,
    recipient,
    message
  }: IRequest): Promise<Appointment> {
    const appointment = await this.appointmentsRepository.create({
      date,
      recipient,
      message,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
