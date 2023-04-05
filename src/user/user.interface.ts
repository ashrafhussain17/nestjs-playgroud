export interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
}

export interface UserRO {
  user: UserData;
}
