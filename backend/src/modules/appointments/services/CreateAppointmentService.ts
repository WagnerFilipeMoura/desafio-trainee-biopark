interface IRequest {
  date: Date;
  recipient: string;
  message: string;
}

class CreateAppointmentService {
  public async execute({
    date,
    recipient,
    message
  }: IRequest) {
    return {date, recipient, message}
  }
}

export default CreateAppointmentService;
