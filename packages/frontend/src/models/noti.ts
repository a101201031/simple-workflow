import { User } from './user';

export interface Noti {
  _id?: number;
  user: User;
  isRead: Boolean;
  notiMessage: String;
  insertDate: Date;
  readDate: Date | null;
}
