export default interface ICreateAppointmentDTO {
  date: Date;
  recipient: string;
  message: string;
  state: 'SCHEDULE' | 'SENT'
}
