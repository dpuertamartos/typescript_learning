import { NewPatient, Gender } from './types';

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const parseString = (text: unknown): string => {
    if (!text || !isString(text)) {
        throw new Error('Incorrect or missing string');
    }
    return text;
};

const parseDate = (date: unknown): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date');
    }
    return date;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const parseGender = (gender: unknown): Gender => {
    if (!gender || !isString(gender) || !isGender(gender)) {
        throw new Error('Incorrect or missing gender');
    }
    return gender;
};

const isGender = (param: string): param is Gender => {
    return Object.values(Gender).includes(param as Gender);
};

const toNewPatient = (object: unknown): NewPatient => {
    if ( !object || typeof object !== 'object' ) {
        throw new Error('Incorrect or missing data');
      }

    if ('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object) {
    const newPatient: NewPatient = {
        name: parseString(object.name),
        dateOfBirth: parseDate(object.dateOfBirth),
        ssn: parseString(object.ssn),
        gender: parseGender(object.gender),
        occupation: parseString(object.occupation),
    };
    return newPatient;
    }
    throw new Error('Incorrect data: some fields are missing');
};

export default toNewPatient;