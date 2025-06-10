"use client";

import { useState } from "react";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const kriteria = ["Harga", "Tahun", "Interior", "Eksterior"];
const alternatif = ["Avanza", "Xenia", "Brio"];

const subOptions: Record<string, { label: string; value: number }[]> = {
  Harga: [
    { label: "Murah", value: 5 },
    { label: "Sedang", value: 3 },
    { label: "Mahal", value: 1 },
  ],
  Tahun: [
    { label: "Baru", value: 5 },
    { label: "Cukup", value: 3 },
    { label: "Lama", value: 1 },
  ],
  Interior: [
    { label: "Bagus", value: 5 },
    { label: "Cukup", value: 3 },
    { label: "Kurang", value: 1 },
  ],
  Eksterior: [
    { label: "Mulus", value: 5 },
    { label: "Sedang", value: 3 },
    { label: "Lecet", value: 1 },
  ],
};

export default function ProsesSPK() {
  const [input, setInput] = useState<Record<string, Record<string, number>>>(
    {}
  );
  const [hasil, setHasil] = useState<{ nama: string; skor: number }[] | null>(
    null
  );

  const handleSelect = (alt: string, kri: string, val: number) => {
    setInput((prev) => ({
      ...prev,
      [alt]: { ...(prev[alt] || {}), [kri]: val },
    }));
  };

  const handleProses = () => {
    const result = alternatif.map((alt) => {
      const total = kriteria.reduce((sum, kri) => {
        const bobot = 0.25; // asumsi bobot sama
        const nilai = input[alt]?.[kri] || 0;
        return sum + nilai * bobot;
      }, 0);
      return { nama: alt, skor: total };
    });

    const sorted = result.sort((a, b) => b.skor - a.skor);
    setHasil(sorted);
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-background text-foreground max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold flex items-center gap-2 mb-6">
        <Settings className="w-5 h-5 text-primary" />
        Proses SPK AHP
      </h1>

      <div className="space-y-6">
        {alternatif.map((alt) => (
          <div key={alt} className="p-4 border rounded-lg">
            <h2 className="text-lg font-semibold mb-4">{alt}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {kriteria.map((kri) => (
                <div key={kri} className="space-y-1">
                  <Label>{kri}</Label>
                  <Select
                    onValueChange={(val) => handleSelect(alt, kri, Number(val))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih nilai..." />
                    </SelectTrigger>
                    <SelectContent>
                      {subOptions[kri].map((opt) => (
                        <SelectItem key={opt.label} value={String(opt.value)}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
          </div>
        ))}

        <Button onClick={handleProses} className="w-full mt-6">
          Proses SPK
        </Button>

        {hasil && (
          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-semibold">Hasil Rekomendasi:</h3>
            <div className="border rounded-lg p-4 space-y-2">
              {hasil.map((item, i) => (
                <div key={item.nama} className="flex justify-between">
                  <span>
                    #{i + 1} {item.nama}
                  </span>
                  <span className="font-semibold">{item.skor.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
