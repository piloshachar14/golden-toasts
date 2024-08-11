import { User } from '..';

export interface GetToast {
  id: string;
  userId: string;
  date: Date | null;
  desc: string;
  fluids: string;
  solids: string;
  hasHappened: boolean;
  user: User;
}
export interface SetToast {
  id: string;
  userId: string;
  date: Date | null;
  desc: string;
  fluids: string;
  solids: string;
  hasHappened: boolean;
}

export interface LeaderboardUser {
  allHappendToasts: number;
  user: {
    id: string;
    fullName: string;
  };
}
