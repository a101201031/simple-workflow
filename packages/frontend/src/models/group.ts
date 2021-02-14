import { User } from './';
export interface Group {
  _id: string;
  groupName: string;
  parentId: string | null;
  approver: User;
}
