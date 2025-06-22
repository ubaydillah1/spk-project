import { Role } from "@/prisma/lib/generated/prisma";

export type User = {
  username: string;
  password: string;
  email: string;
  role: Role;
};
