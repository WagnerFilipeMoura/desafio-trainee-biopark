import { isBefore, parseISO } from "date-fns";
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  date: string;
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
    const dateParsed = parseISO(date)

    if (isBefore(dateParsed, Date.now())) {
      throw new AppError("Não é possível realizar agendamento com data/hora retroativa.");
    }

    const appointment = await this.appointmentsRepository.create({
      date: dateParsed,
      recipient,
      message,
      state: "SCHEDULE"
    });

    return appointment;
  }
}

export default CreateAppointmentService;
