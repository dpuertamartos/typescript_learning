import express, { Request, Response, NextFunction } from 'express';
import patientsService from '../services/patientsService';
import { NewPatientSchema } from '../utils';
import { NonSensitivePatientInfo, Patient, NewPatient } from '../types';
import { z } from 'zod';

const router = express.Router();

const newPatientParser = (req: Request, _res: Response, next: NextFunction) => { 
    try {
      NewPatientSchema.parse(req.body);
      next();
    } catch (error: unknown) {
      next(error);
    }
};

export const errorHandler = (error: unknown, _req: Request, res: Response) => {
    if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.message });
    }
};

router.get('/', (_req: Request, res: Response<NonSensitivePatientInfo[]>) => {
    res.send(patientsService.getPatients());
});

router.post('/', newPatientParser ,(req: Request<unknown, unknown, NewPatient>, res: Response<Patient>) => {  
    const addedPatient = patientsService.addPatient(req.body);
    res.json(addedPatient);
});

router.use(errorHandler);

export default router;