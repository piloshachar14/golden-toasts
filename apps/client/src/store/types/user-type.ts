import { UUID } from 'crypto';

export interface User {
  id: UUID;
  armyId: string;
  fullName: string;
  password: string;
  isAdmin: boolean;
}
