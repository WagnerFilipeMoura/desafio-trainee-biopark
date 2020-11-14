import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAppointmentService from '../../../services/CreateAppointmentService';
import SearchByStateService from '../../../services/SearchByStateService';

export default class AppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { date, recipient, message } = request.body;

    const createAppointmentService = container.resolve(
      CreateAppointmentService,
    );

    const appointment = await createAppointmentService.execute({
      date,
      recipient,
      message
    });

    return response.json(appointment);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const searchByStateService = container.resolve(
      SearchByStateService,
    );

    const appointment = await searchByStateService.execute({
      id
    });

    return response.json(appointment?.state);
  }
}
