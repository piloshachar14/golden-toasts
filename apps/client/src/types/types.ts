export type User = {
  name: string;
  armyID?: string;
};
export type Toast = {
  userId: string;
  date: Date;
  desc: string;
  fluids: string[];
  solids: string[];
};
