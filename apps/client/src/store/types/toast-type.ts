import { User } from '..';

export interface Toast {
  id: string;
  user: User;
  date: Date;
  desc: string;
  fluids: string[];
  solids: string[];
}
