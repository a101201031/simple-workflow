import { User } from './user';

export interface Notie {
  _id?: number;
  user: User;
  isRead: Boolean;
  notiMessage: String;
  insertDate: Date;
  readDate: Date;
}
