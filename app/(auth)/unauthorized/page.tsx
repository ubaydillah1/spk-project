"use client";

import { Lock, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-6 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="flex flex-col items-center gap-6"
      >
        <Lock className="w-16 h-16 text-red-500 animate-pulse" />
        <h1 className="text-3xl font-bold text-red-600">Akses Ditolak</h1>
        <p className="text-muted-foreground max-w-md">
          Kamu tidak memiliki izin untuk mengakses halaman ini. Silakan kembali
          ke dashboard atau hubungi admin.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </Link>
      </motion.div>
    </div>
  );
}
