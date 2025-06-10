"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Hasil = {
  nama: string;
  skor: number;
};

export default function HasilPage() {
  const [hasil, setHasil] = useState<Hasil[] | null>([
    { nama: "Avanza", skor: 4.2 },
    { nama: "Brio", skor: 3.9 },
    { nama: "Xenia", skor: 3.2 },
  ]);

  const handleReset = () => {
    setHasil(null);
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-background text-foreground max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500" />
          Hasil Rekomendasi
        </h1>
        <Button variant="outline" onClick={handleReset}>
          Reset
        </Button>
      </div>

      {hasil ? (
        <div className="grid gap-4">
          {hasil.map((item, index) => (
            <Card key={item.nama} className="border-l-4 border-primary">
              <CardHeader className="flex flex-row justify-between items-center">
                <CardTitle>
                  #{index + 1} {item.nama}
                </CardTitle>
                <div className="text-muted-foreground">
                  Skor: {item.skor.toFixed(2)}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Mobil {item.nama} direkomendasikan dengan skor AHP{" "}
                  {item.skor.toFixed(2)}.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center text-muted-foreground mt-20">
          Belum ada hasil. Silakan lakukan proses SPK terlebih dahulu.
        </div>
      )}
    </div>
  );
}
