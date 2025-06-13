/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { useEffect, useState } from "react";
import { Sliders, Plus, Trash2, Pencil } from "lucide-react";

type Kriteria = {
  id: string;
  criteria_name: string;
  weight: number;
  criterion_type: string;
};

export default function DataKriteriaPage() {
  const [kriteriaList, setKriteriaList] = useState<Kriteria[]>([]);
  const [form, setForm] = useState({
    criteria_name: "",
    weight: "",
    criterion_type: "BENEFIT",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/criteria");
      const data = await res.json();
      setKriteriaList(data.data || []);
    } catch (err) {
      setError("Gagal mengambil data kriteria");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    const { criteria_name, weight, criterion_type } = form;
    if (!criteria_name || !weight || !criterion_type) return;

    const res = await fetch("/api/criteria", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        criteria_name,
        weight: parseFloat(weight),
        criterion_type,
      }),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Gagal menambahkan kriteria");
      return;
    }

    setForm({ criteria_name: "", weight: "", criterion_type: "BENEFIT" });
    setDialogOpen(false);
    setError(null);
    fetchData();
  };

  const handleDelete = async (id: string) => {
    const confirm = window.confirm("Yakin ingin menghapus kriteria ini?");
    if (!confirm) return;

    try {
      const res = await fetch(`/api/criteria/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Gagal menghapus kriteria");
        return;
      }

      fetchData();
    } catch (err) {
      setError("Terjadi kesalahan saat menghapus data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen px-6 py-10 bg-background text-foreground flex justify-center">
      <div className="w-full max-w-5xl space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Sliders className="w-5 h-5 text-primary" />
            Data Kriteria
          </h1>

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
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
                {error && (
                  <p className="text-sm text-red-500 font-medium">{error}</p>
                )}
                <div className="space-y-1">
                  <Label>Nama Kriteria</Label>
                  <Input
                    placeholder="Contoh: Harga"
                    value={form.criteria_name}
                    onChange={(e) =>
                      setForm({ ...form, criteria_name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-1">
                  <Label>Bobot</Label>
                  <Input
                    type="number"
                    placeholder="Contoh: 0.25"
                    value={form.weight}
                    onChange={(e) =>
                      setForm({ ...form, weight: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-1">
                  <Label>Tipe</Label>
                  <select
                    className="w-full border px-3 py-2 rounded-md text-sm"
                    value={form.criterion_type}
                    onChange={(e) =>
                      setForm({ ...form, criterion_type: e.target.value })
                    }
                  >
                    <option value="BENEFIT">Benefit</option>
                    <option value="COST">Cost</option>
                  </select>
                </div>

                <Button onClick={handleAdd} className="w-full mt-2">
                  Simpan
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="rounded-lg border overflow-x-auto">
          {loading ? (
            <p className="p-4 text-sm text-muted-foreground">Memuat data...</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Kode</TableHead>
                  <TableHead>Nama Kriteria</TableHead>
                  <TableHead>Bobot</TableHead>
                  <TableHead>Tipe</TableHead>
                  <TableHead>Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {kriteriaList.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell>{`C${index + 1}`}</TableCell>
                    <TableCell>{item.criteria_name}</TableCell>
                    <TableCell>{item.weight}</TableCell>
                    <TableCell>{item.criterion_type}</TableCell>
                    <TableCell className="flex gap-2">
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </div>
    </div>
  );
}
