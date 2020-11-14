import { Router } from 'express';

import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.post('/', appointmentsController.create);
appointmentsRouter.get('/:id', appointmentsController.index);
appointmentsRouter.delete('/:id', appointmentsController.delete);

export default appointmentsRouter;
