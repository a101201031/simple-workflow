import { User } from './';
interface Approver extends User {
  date: Date;
  step: number;
  status: null | 'PENDING' | 'REJECT' | 'RESOLVE';
  comment?: string;
}

export interface Approval {
  _id?: string;
  approvalFormName: string;
  insertDate: Date;
  user: User;
  approver: Approver[];
  status: 'PENDING' | 'REJECT' | 'RESOLVE';
  lastUpdate: Date;
}
