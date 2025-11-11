import { Role } from "@prisma/client";

export type User = {
  username: string;
  password: string;
  email: string;
  role: Role;
};
