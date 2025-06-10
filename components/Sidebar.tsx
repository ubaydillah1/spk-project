"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Sliders,
  Layers,
  Car,
  Settings,
  Star,
} from "lucide-react";

const navItems = [
  {
    href: "/dashboard/users",
    label: "Data User",
    icon: <Users className="w-4 h-4" />,
  },
  {
    href: "/dashboard/kriteria",
    label: "Kriteria",
    icon: <Sliders className="w-4 h-4" />,
  },
  {
    href: "/dashboard/subkriteria",
    label: "Sub Kriteria",
    icon: <Layers className="w-4 h-4" />,
  },
  {
    href: "/dashboard/alternatif",
    label: "Alternatif",
    icon: <Car className="w-4 h-4" />,
  },
  {
    href: "/dashboard/proses",
    label: "Proses SPK",
    icon: <Settings className="w-4 h-4" />,
  },
  {
    href: "/dashboard/hasil",
    label: "Hasil",
    icon: <Star className="w-4 h-4" />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:block w-64 h-screen fixed left-0 top-0 border-r bg-background p-6 z-20">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <LayoutDashboard className="w-6 h-6" />
        Dashboard
      </h2>

      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition hover:bg-muted",
              pathname === item.href
                ? "bg-muted text-primary"
                : "text-muted-foreground"
            )}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
