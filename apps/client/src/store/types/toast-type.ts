import { User } from '..';

export interface Toast {
  id: string;
  userId: string;
  date: Date | null;
  desc: string;
  fluids: string;
  solids: string;
  hasHappened: boolean;
  user?: User;
}

export interface LeaderboardUser {
  allHappendToasts: number;
  user: {
    id: string;
    fullName: string;
  };
}
