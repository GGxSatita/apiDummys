export type Auth = {
  password: string;
  username: string;
};

export type AuthResponse = {
  token: string;
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
};
