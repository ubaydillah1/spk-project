import Link from "next/link";
import { Car, ArrowRight } from "lucide-react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 px-6 py-20 text-center bg-background text-foreground">
      <div className="flex flex-col items-center gap-4">
        <Car className="w-12 h-12 text-primary" />
        <h1 className="text-4xl font-bold">Sistem Pendukung Keputusan</h1>
        <p className="text-sm text-muted-foreground max-w-md">
          Temukan mobil terbaik berdasarkan kriteria yang kamu pilih dengan
          metode AHP.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <SignedIn>
          <Link
            href="/dashboard/users"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-md shadow hover:bg-primary/90 transition"
          >
            Masuk Sistem
            <ArrowRight className="w-4 h-4" />
          </Link>
        </SignedIn>

        <SignedOut>
          <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-md shadow hover:bg-primary/90 transition">
            <SignInButton
              mode="redirect"
              forceRedirectUrl="/dashboard/users"
              fallbackRedirectUrl="/dashboard/users"
            >
              <button className="...">Masuk Sistem</button>
            </SignInButton>
            <ArrowRight className="w-4 h-4" />
          </div>
        </SignedOut>
      </div>
      <footer className="absolute bottom-4 text-xs text-muted-foreground">
        Dibuat dengan ❤️ oleh Tim SPK AHP — {new Date().getFullYear()}
      </footer>
    </div>
  );
}
