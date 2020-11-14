import { injectable, inject } from 'tsyringe';

import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

interface IRequest {
  id: string;
}

@injectable()
class DeleteAppointmentService{
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({
    id
  }: IRequest): Promise<void> {
    await this.appointmentsRepository.removeAppointment(id);

    return;
  }
}

export default DeleteAppointmentService;
