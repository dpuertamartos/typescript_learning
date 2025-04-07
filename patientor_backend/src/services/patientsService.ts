import patientsData from '../data/patients';
import { NonSensitivePatientInfo, Patient, NewPatient } from '../types';
import { v4 as uuid } from 'uuid';

const patients: Patient[] = patientsData;

const getPatients = (): NonSensitivePatientInfo[] => {
    return patients.map(({id, name, dateOfBirth, gender, occupation}) => 
        ({
            id,
            name,
            dateOfBirth,
            gender,
            occupation
        }));
};

const addPatient = (patient: NewPatient): Patient => {
    const newPatient = {
        id: uuid(),
        ...patient
    };
    patients.push(newPatient);
    return newPatient;
};

export default {
    getPatients,
    addPatient
};
