import patientsData from '../data/patients';
import { NonSensitivePatientInfo, Patient } from '../types';

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

export default {
    getPatients
};
