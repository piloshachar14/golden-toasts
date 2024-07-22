import { User } from '..';

export interface Criminal {
  userId: string;
  id: string;
  isPersonaNonGrata: boolean;
  createdAt: Date;
  user: User;
}
