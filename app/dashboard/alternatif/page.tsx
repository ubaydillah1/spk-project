/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { Car, Plus } from "lucide-react";

type Alternatif = {
  id: number;
  nama: string;
  tahun: number;
  merek: string;
  harga: number;
  interior: string;
  eksterior: string;
  warna: string;
};

export default function DataAlternatifPage() {
  const [form, setForm] = useState({
    nama: "",
    tahun: "",
    merek: "",
    harga: "",
    interior: "",
    eksterior: "",
    warna: "",
  });

  const [data, setData] = useState<Alternatif[]>([
    {
      id: 1,
      nama: "Avanza G",
      tahun: 2020,
      merek: "Toyota",
      harga: 200000000,
      interior: "Bagus",
      eksterior: "Cukup",
      warna: "Hitam",
    },
  ]);

  const handleAdd = () => {
    if (!form.nama || !form.tahun || !form.merek) return;

    setData((prev) => [
      ...prev,
      {
        id: Date.now(),
        nama: form.nama,
        tahun: parseInt(form.tahun),
        merek: form.merek,
        harga: parseInt(form.harga),
        interior: form.interior,
        eksterior: form.eksterior,
        warna: form.warna,
      },
    ]);
    setForm({
      nama: "",
      tahun: "",
      merek: "",
      harga: "",
      interior: "",
      eksterior: "",
      warna: "",
    });
  };

  return (
    <div className="min-h-screen px-6 py-10 bg-background text-foreground flex justify-center">
      <div className="w-full max-w-6xl space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Car className="w-5 h-5 text-primary" />
            Data Alternatif Mobil
          </h1>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Tambah Alternatif
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg rounded-xl shadow-xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Tambah Alternatif</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-2">
                {[
                  ["Nama Mobil", "nama"],
                  ["Tahun", "tahun"],
                  ["Merek", "merek"],
                  ["Harga", "harga"],
                  ["Interior", "interior"],
                  ["Eksterior", "eksterior"],
                  ["Warna", "warna"],
                ].map(([label, key]) => (
                  <div key={key} className="space-y-1">
                    <Label>{label}</Label>
                    <Input
                      type={
                        key === "tahun" || key === "harga" ? "number" : "text"
                      }
                      value={(form as any)[key]}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, [key]: e.target.value }))
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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nama</TableHead>
                <TableHead>Tahun</TableHead>
                <TableHead>Merek</TableHead>
                <TableHead>Harga</TableHead>
                <TableHead>Interior</TableHead>
                <TableHead>Eksterior</TableHead>
                <TableHead>Warna</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((alt) => (
                <TableRow key={alt.id}>
                  <TableCell>{alt.id}</TableCell>
                  <TableCell>{alt.nama}</TableCell>
                  <TableCell>{alt.tahun}</TableCell>
                  <TableCell>{alt.merek}</TableCell>
                  <TableCell>{alt.harga}</TableCell>
                  <TableCell>{alt.interior}</TableCell>
                  <TableCell>{alt.eksterior}</TableCell>
                  <TableCell>{alt.warna}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
