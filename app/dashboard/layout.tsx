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

  if (!user?.id) {
    redirect("/sign-in");
  }

  const dbUser = await prisma.user.findUnique({ where: { id: user.id } });

  if (!dbUser) {
    redirect("/unauthorized");
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
