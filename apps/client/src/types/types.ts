export type User = {
  name: string;
  armyID?: string;
};
export type Toast = {
  user: User;
  toastDate: Date;
  toastDesc: string;
};
