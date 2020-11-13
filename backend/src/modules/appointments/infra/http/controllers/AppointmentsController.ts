import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateAppointmentService from '../../../services/CreateAppointmentService';

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
}
