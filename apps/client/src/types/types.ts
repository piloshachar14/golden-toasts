export type User = {
  name: string;
  armyID?: string;
};
export type Toast = {
  user: User;
  date: Date;
  desc: string;
};
