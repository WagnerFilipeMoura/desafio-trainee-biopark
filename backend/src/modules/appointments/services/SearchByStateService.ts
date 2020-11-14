import { isBefore, parseISO } from "date-fns";
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  id: string;
}

@injectable()
class SearchByStateService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({
    id
  }: IRequest): Promise<Appointment | undefined> {
    const appointment = await this.appointmentsRepository.searchByState(id);

    return appointment;
  }
}

export default SearchByStateService;
