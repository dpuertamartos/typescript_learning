import express from 'express';
import cors from 'cors';
import diagnosesRouter from './routes/diagnoses';
import pingRouter from './routes/ping';
import patientsRouter from './routes/patients';
const app = express();

const BASE_URI = '/api';
const PORT = 3001;

app.use(express.json());
app.use(cors());
app.use(BASE_URI + '/ping', pingRouter);
app.use(BASE_URI + '/diagnoses', diagnosesRouter);
app.use(BASE_URI + '/patients', patientsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});