import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
