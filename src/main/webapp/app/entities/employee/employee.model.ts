import dayjs from 'dayjs/esm';
import { IUser } from 'app/entities/user/user.model';
import { IDepartment } from 'app/entities/department/department.model';

export interface IEmployee {
  id: number;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  hireDate?: dayjs.Dayjs | null;
  salary?: number | null;
  commissionPct?: number | null;
  height?: number | null;
  weight?: number | null;
  manager?: Pick<IEmployee, 'id'> | null;
  user?: Pick<IUser, 'id' | 'login'> | null;
  department?: Pick<IDepartment, 'id'> | null;
}

export type NewEmployee = Omit<IEmployee, 'id'> & { id: null };
