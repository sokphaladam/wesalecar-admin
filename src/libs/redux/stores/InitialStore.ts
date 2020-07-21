type UserType = {
  id: string;
  email: string;
  username: string;
}

const users: UserType[] = [];

export const InitialStore = {
  users
}