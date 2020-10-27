export interface IUser {
  id: number;
  accessToken: string;
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  roles: Role[];
}

export enum Role {
  ADMIN,
  SUB_ADMIN,
  USER
}