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
import { Car, Plus, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

type Alternative = {
  id: string;
  name: string;
  values: {
    criteriaId: string;
    value: string;
  }[];
};

type Criteria = {
  id: string;
  criteria_name: string;
};

export default function DataAlternatifPage() {
  const { user } = useUser();
  const [criteria, setCriteria] = useState<Criteria[]>([]);
  const [alternatives, setAlternatives] = useState<Alternative[]>([]);
  const [form, setForm] = useState<{
    name: string;
    values: Record<string, string>;
  }>({
    name: "",
    values: {},
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAll = async () => {
    if (!user?.id) return;

    setLoading(true);
    try {
      const [criteriaRes, altRes] = await Promise.all([
        fetch("/api/criteria"),
        fetch(`/api/alternative?userId=${user.id}`),
      ]);
      const [criteriaData, altData] = await Promise.all([
        criteriaRes.json(),
        altRes.json(),
      ]);
      setCriteria(criteriaData.data || []);
      setAlternatives(altData.data || []);
      setError(null);
    } catch {
      setError("Gagal mengambil data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleAdd = async () => {
    if (!form.name || !user?.id) {
      setError("Nama dan user wajib diisi");
      return;
    }

    const payload = {
      name: form.name,
      userId: user.id,
      values: criteria.map((c) => ({
        criteriaId: c.id,
        value: form.values[c.id] || "",
      })),
    };

    const res = await fetch("/api/alternative", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const d = await res.json();
      setError(d.error || "Gagal menambahkan alternatif");
      return;
    }

    setForm({ name: "", values: {} });
    setDialogOpen(false);
    fetchAll();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Yakin ingin menghapus alternatif ini?")) return;

    const res = await fetch(`/api/alternative/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const d = await res.json();
      setError(d.error || "Gagal menghapus alternatif");
      return;
    }

    fetchAll();
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-background text-foreground flex justify-center">
      <div className="w-full max-w-7xl space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Car className="w-5 h-5 text-primary" />
            Data Alternatif Mobil
          </h1>

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" /> Tambah Alternatif
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg rounded-xl shadow-xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Tambah Alternatif</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-2">
                {error && <p className="text-red-500">{error}</p>}

                <div className="space-y-1">
                  <Label>Nama Alternatif</Label>
                  <Input
                    value={form.name}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </div>

                {criteria.map((c) => (
                  <div key={c.id} className="space-y-1">
                    <Label>{c.criteria_name}</Label>
                    <Input
                      value={form.values[c.id] || ""}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          values: {
                            ...prev.values,
                            [c.id]: e.target.value,
                          },
                        }))
                      }
                    />
                  </div>
                ))}

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
                  <TableHead>No</TableHead>
                  <TableHead>Nama</TableHead>
                  {criteria.map((c) => (
                    <TableHead key={c.id}>{c.criteria_name}</TableHead>
                  ))}
                  <TableHead>Aksi</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {alternatives.map((alt, i) => (
                  <TableRow key={alt.id}>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{alt.name}</TableCell>
                    {criteria.map((c) => {
                      const val = alt.values.find((v) => v.criteriaId === c.id);
                      return (
                        <TableCell key={c.id}>{val?.value || "-"}</TableCell>
                      );
                    })}
                    <TableCell>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(alt.id)}
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
