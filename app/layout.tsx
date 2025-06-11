import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { FallingStars } from "@/components/FallingStars";
import { ClerkProvider, SignedIn, UserButton } from "@clerk/nextjs";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SPK MOBIL",
  description: "Book your favorite movies with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.variable} font-inter antialiased dark`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <FallingStars />

            <header className="flex justify-end items-center p-6 gap-4 h-16 bg-blend-saturation fixed top-0 left-0 right-0">
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>

            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
