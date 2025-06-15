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
  Star,
} from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MooraProsesPage() {
  const { user } = useUser();
  const [criteria, setCriteria] = useState<any[]>([]);
  const [alternatives, setAlternatives] = useState<any[]>([]);
  const [normalized, setNormalized] = useState<any[]>([]);
  const [finalScores, setFinalScores] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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
      <div className="p-6 max-w-4xl mx-auto">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              Hasil Rekomendasi
            </h2>
          </div>

          <div className="grid gap-4">
            {finalScores.map((item, index) => (
              <Card key={item.name} className="border-l-4 border-primary">
                <CardHeader className="flex flex-row justify-between items-center">
                  <CardTitle>
                    #{index + 1} {item.name}
                  </CardTitle>
                  <div className="text-muted-foreground">
                    Skor: {item.score.toFixed(4)}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Alternatif {item.name} direkomendasikan berdasarkan skor
                    MOORA {item.score.toFixed(4)}.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
