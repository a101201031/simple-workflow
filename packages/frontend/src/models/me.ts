export interface Me {
  userName: string;
  email: string;
  groupId?: string;
  groupName?: string;
  auth: 'USER' | 'ADMIN';
}
