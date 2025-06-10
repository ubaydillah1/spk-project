"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sliders, Plus } from "lucide-react";

type Kriteria = {
  id: number;
  nama: string;
  bobot: number;
};

export default function DataKriteriaPage() {
  const [kriteriaList, setKriteriaList] = useState<Kriteria[]>([
    { id: 1, nama: "Harga", bobot: 0.3 },
    { id: 2, nama: "Tahun", bobot: 0.2 },
  ]);

  const [form, setForm] = useState({ nama: "", bobot: "" });

  const handleAdd = () => {
    if (!form.nama || !form.bobot) return;
    setKriteriaList((prev) => [
      ...prev,
      {
        id: Date.now(),
        nama: form.nama,
        bobot: parseFloat(form.bobot),
      },
    ]);
    setForm({ nama: "", bobot: "" });
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-background text-foreground flex justify-center">
      <div className="w-full max-w-5xl space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Sliders className="w-5 h-5 text-primary" />
            Data Kriteria
          </h1>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Tambah Kriteria
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md rounded-xl shadow-xl">
              <DialogHeader>
                <DialogTitle>Tambah Kriteria</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-2">
                <div className="space-y-1">
                  <Label>Nama Kriteria</Label>
                  <Input
                    placeholder="Contoh: Harga"
                    value={form.nama}
                    onChange={(e) => setForm({ ...form, nama: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <Label>Bobot</Label>
                  <Input
                    type="number"
                    placeholder="Contoh: 0.25"
                    value={form.bobot}
                    onChange={(e) =>
                      setForm({ ...form, bobot: e.target.value })
                    }
                  />
                </div>
                <Button onClick={handleAdd} className="w-full mt-2">
                  Simpan
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="rounded-lg border overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nama Kriteria</TableHead>
                <TableHead>Bobot</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {kriteriaList.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.nama}</TableCell>
                  <TableCell>{item.bobot}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
