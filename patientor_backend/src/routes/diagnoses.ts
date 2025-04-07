import express, { Request, Response } from 'express';
import diagnosesService from '../services/diagnosesService';
import { Diagnosis } from '../types';


const router = express.Router();

router.get('/', (_req: Request, res: Response<Diagnosis[]>) => {
    res.send(diagnosesService.getDiagnoses());
});

export default router;