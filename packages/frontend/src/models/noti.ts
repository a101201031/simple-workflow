import { User } from './user';

export interface Noti {
  id: number;
  user: User;
  isRead: Boolean;
  notiMessage: String;
  notiUrl: String;
  insertDate: Date;
  readDate: Date | null;
}
