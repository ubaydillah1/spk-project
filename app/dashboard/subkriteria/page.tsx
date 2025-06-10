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
import { Layers, Plus } from "lucide-react";

type SubKriteria = {
  id: number;
  kriteria: string;
  nama: string;
  bobot: number;
};

export default function SubKriteriaPage() {
  const [subList, setSubList] = useState<SubKriteria[]>([
    { id: 1, kriteria: "Harga", nama: "Murah", bobot: 0.5 },
    { id: 2, kriteria: "Harga", nama: "Sedang", bobot: 0.3 },
  ]);

  const [form, setForm] = useState({ kriteria: "", nama: "", bobot: "" });

  const handleAdd = () => {
    if (!form.kriteria || !form.nama || !form.bobot) return;
    setSubList((prev) => [
      ...prev,
      {
        id: Date.now(),
        kriteria: form.kriteria,
        nama: form.nama,
        bobot: parseFloat(form.bobot),
      },
    ]);
    setForm({ kriteria: "", nama: "", bobot: "" });
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-background text-foreground flex justify-center">
      <div className="w-full max-w-5xl space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Layers className="w-5 h-5 text-primary" />
            Data Sub Kriteria
          </h1>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Tambah Sub Kriteria
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md rounded-xl shadow-xl">
              <DialogHeader>
                <DialogTitle>Tambah Sub Kriteria</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-2">
                <div className="space-y-1">
                  <Label>Kriteria Induk</Label>
                  <Input
                    placeholder="Contoh: Harga"
                    value={form.kriteria}
                    onChange={(e) =>
                      setForm({ ...form, kriteria: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-1">
                  <Label>Nama Sub</Label>
                  <Input
                    placeholder="Contoh: Murah"
                    value={form.nama}
                    onChange={(e) => setForm({ ...form, nama: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <Label>Bobot</Label>
                  <Input
                    type="number"
                    placeholder="Contoh: 0.5"
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
                <TableHead>Kriteria Induk</TableHead>
                <TableHead>Sub Kriteria</TableHead>
                <TableHead>Bobot</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subList.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.kriteria}</TableCell>
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
