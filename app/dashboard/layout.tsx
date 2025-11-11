import Sidebar from "@/components/layout/Sidebar";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  if (!user?.id) redirect("/sign-in");

  let dbUser = await prisma.user.findUnique({
    where: { id: user.id },
  });

  if (!dbUser) {
    const userCount = await prisma.user.count();

    dbUser = await prisma.user.create({
      data: {
        id: user.id,
        email: user.emailAddresses?.[0]?.emailAddress ?? "",
        username: user.firstName ?? "User",
        role: userCount === 0 ? "ADMIN" : "USER",
      },
    });
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar role={dbUser.role} />
      <main className="flex-1 ml-0 md:ml-72 p-6 min-h-screen bg-background">
        {children}
      </main>
    </div>
  );
}
