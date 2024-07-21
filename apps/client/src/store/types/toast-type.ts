export interface Toast {
  id: string;
  userId: string;
  date: Date | null;
  desc: string;
  fluids: string;
  solids: string;
  hasHappened: boolean;
}
