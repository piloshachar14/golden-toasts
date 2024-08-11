import { User } from '..';

export interface GetCriminal {
  userId: string;
  id: string;
  isPersonaNonGrata: boolean;
  createdAt: Date;
  user: User;
}
export interface SetCriminal {
  userId: string;
  id: string;
  isPersonaNonGrata: boolean;
  createdAt: Date;
}
