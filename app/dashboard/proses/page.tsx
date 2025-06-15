/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUser } from "@clerk/nextjs";
import {
  Loader2,
  SlidersHorizontal,
  BarChart3,
  Info,
  ListOrdered,
  ListChecks,
  Scaling,
  Award,
  EyeOff,
  Eye,
} from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export default function MooraProsesPage() {
  const { user } = useUser();
  const [criteria, setCriteria] = useState<any[]>([]);
  const [alternatives, setAlternatives] = useState<any[]>([]);
  const [normalized, setNormalized] = useState<any[]>([]);
  const [finalScores, setFinalScores] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showRawData, setShowRawData] = useState(false);

  useEffect(() => {
    if (!user?.id) return;

    const fetchData = async () => {
      setLoading(true);
      const [cRes, aRes] = await Promise.all([
        fetch("/api/criteria"),
        fetch(`/api/alternative?userId=${user.id}`),
      ]);

      const [cData, aData] = await Promise.all([cRes.json(), aRes.json()]);

      setCriteria(cData.data || []);
      setAlternatives(aData.data || []);
      setLoading(false);
    };

    fetchData();
  }, [user?.id]);

  useEffect(() => {
    if (!criteria.length || !alternatives.length) return;

    const norm: any[] = [];

    criteria.forEach((cri: any) => {
      const values = alternatives.map((alt: any) => {
        const val = alt.values.find((v: any) => v.criteriaId === cri.id);
        return parseFloat(val?.value || "0");
      });

      const max = Math.max(...values);
      const min = Math.min(...values);

      alternatives.forEach((alt: any, i: number) => {
        const val = parseFloat(
          alt.values.find((v: any) => v.criteriaId === cri.id)?.value || "0"
        );

        let result = 0;
        if (cri.criterion_type === "BENEFIT") {
          result = (val - min) / (max - min || 1);
        } else {
          result = (max - val) / (max - min || 1);
        }

        if (!norm[i]) norm[i] = { name: alt.name, values: {}, score: 0 };
        norm[i].values[cri.criteria_name] = result;
        norm[i].score += result * cri.weight;
      });
    });

    const sortedScores = [...norm]
      .map((n, i) => ({ ...n, rank: 0 }))
      .sort((a, b) => b.score - a.score)
      .map((item, idx) => ({ ...item, rank: idx + 1 }));

    setNormalized(norm);
    setFinalScores(sortedScores);
  }, [criteria, alternatives]);

  if (loading) {
    return (
      <div className="p-6 flex items-center gap-2 text-muted-foreground">
        <Loader2 className="animate-spin w-4 h-4" />
        <span>Memuat data...</span>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <div className="p-6 space-y-10">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <SlidersHorizontal className="w-6 h-6 text-primary" /> Proses
          Perhitungan MOORA
        </h1>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <ListOrdered className="w-4 h-4 text-muted-foreground" /> Data
              Alternatif (Raw)
            </h2>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowRawData((prev) => !prev)}
              className="gap-2"
            >
              {showRawData ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
              {showRawData ? "Sembunyikan" : "Tampilkan"}
            </Button>
          </div>
          {showRawData && (
            <div className="rounded-lg border overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>No</TableHead>
                    <TableHead>Nama</TableHead>
                    {criteria.map((c) => (
                      <TableHead key={c.id}>{c.criteria_name}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {alternatives.map((alt: any, index) => (
                    <TableRow key={alt.name}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{alt.name}</TableCell>
                      {criteria.map((c) => {
                        const val = alt.values.find(
                          (v: any) => v.criteriaId === c.id
                        )?.value;
                        return <TableCell key={c.id}>{val}</TableCell>;
                      })}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <ListChecks className="w-4 h-4 text-muted-foreground" /> Bobot
            Kriteria
          </h2>
          <div className="rounded-lg border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  {criteria.map((c) => (
                    <TableHead key={c.id}>
                      {c.criteria_name}{" "}
                      <span className="text-xs text-muted-foreground">
                        ({c.criterion_type})
                      </span>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  {criteria.map((c) => (
                    <TableCell key={c.id}>{c.weight}</TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Scaling className="w-4 h-4 text-muted-foreground" /> Matriks
            Ternormalisasi
          </h2>
          <div className="rounded-lg border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Alternatif</TableHead>
                  {criteria.map((c) => (
                    <TableHead key={c.id}>{c.criteria_name}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {normalized.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell>{row.name}</TableCell>
                    {criteria.map((c) => (
                      <TableCell key={c.id}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="cursor-help">
                              {row.values[c.criteria_name].toFixed(4)}
                            </span>
                          </TooltipTrigger>
                          <TooltipContent className="bg-primary text-white text-xs py-3">
                            Rumus:{" "}
                            {c.criterion_type === "BENEFIT"
                              ? "(x - min) / (max - min)"
                              : "(max - x) / (max - min)"}
                          </TooltipContent>
                        </Tooltip>
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Award className="w-4 h-4 text-muted-foreground" /> Hasil Akhir
            (Skor & Ranking)
          </h2>
          <div className="rounded-lg border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ranking</TableHead>
                  <TableHead>Alternatif</TableHead>
                  <TableHead className="flex items-center gap-1">
                    Skor Preferensi
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="w-4 h-4 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-primary text-white text-xs z-50 mt-2 shadow-md rounded px-3 py-3">
                        Rumus: Total Skor = ∑ (Normalisasi × Bobot)
                      </TooltipContent>
                    </Tooltip>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {finalScores.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell>{row.rank}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.score.toFixed(4)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
