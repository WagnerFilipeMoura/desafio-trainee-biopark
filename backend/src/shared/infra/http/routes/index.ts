import { Router } from 'express';
import appointmentRouter from '../../../../modules/appointments/infra/http/routes/appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentRouter);

export default routes;
