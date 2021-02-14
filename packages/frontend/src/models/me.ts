import { Group } from './group';

export interface Me {
  userName: string;
  email: string;
  group: Group;
  auth: 'USER' | 'ADMIN';
}
