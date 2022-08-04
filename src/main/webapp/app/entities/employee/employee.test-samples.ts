import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 7813,
};

export const sampleWithPartialData: IEmployee = {
  id: 56543,
  lastName: 'Kutch',
  email: 'Harrison14@hotmail.com',
  hireDate: dayjs('2022-08-04T09:47'),
  commissionPct: 99523,
  height: 40560,
  weight: 28480,
};

export const sampleWithFullData: IEmployee = {
  id: 86212,
  firstName: 'Henriette',
  lastName: 'Greenholt',
  email: 'Ervin.Lehner@hotmail.com',
  phoneNumber: 'grey SSL sensor',
  hireDate: dayjs('2022-08-03T23:27'),
  salary: 89015,
  commissionPct: 35265,
  height: 64922,
  weight: 99788,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
