/* eslint-disable @typescript-eslint/no-unused-vars */
import clerkClient from "@/lib/clerk";
import prisma from "@/lib/prisma";
import { User } from "@/types/user";

export async function GET(request: Request) {
  const users = await prisma.user.findMany();

  return Response.json({
    message: "Successs",
    users,
  });
}

export async function POST(request: Request) {
  try {
    const user: User = await request.json();

    const clerkData = await clerkClient.users.createUser({
      emailAddress: [user.email],
      password: user.password,
    });

    await prisma.user.create({
      data: {
        username: user.username,
        id: clerkData.id,
        email: user.email,
        role: user.role ?? "USER",
      },
    });

    return Response.json({
      message: "Success",
      data: user,
    });
  } catch (error) {
    return Response.json(
      {
        message: "Terjadi kesalahan",
        error: (error as Error).message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
