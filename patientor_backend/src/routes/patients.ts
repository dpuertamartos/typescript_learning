import express, { Request, Response } from 'express';
import patientsService from '../services/patientsService';
import { NonSensitivePatientInfo } from '../types';

const router = express.Router();

router.get('/', (_req: Request, res: Response<NonSensitivePatientInfo[]>) => {
    res.send(patientsService.getPatients());
});

export default router;