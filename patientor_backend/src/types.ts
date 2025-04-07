import { z } from 'zod';
import { NewPatientSchema } from './utils';

export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
}

export interface Diagnosis {
    code: string;
    name: string;
    latin?: string;
}

export interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: Gender;
    occupation: string;
}

export type NewPatient = z.infer<typeof NewPatientSchema>;
export type NonSensitivePatientInfo = Omit<Patient, 'ssn'>;