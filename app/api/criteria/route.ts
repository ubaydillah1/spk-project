import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const all = await prisma.criteria.findMany();
  return NextResponse.json({ data: all });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { criteria_name, weight, criterion_type } = body;

  if (!criteria_name || !weight || !criterion_type) {
    return NextResponse.json({ error: "Field tidak lengkap" }, { status: 400 });
  }

  const created = await prisma.criteria.create({
    data: {
      criteria_name,
      weight: parseFloat(weight),
      criterion_type,
    },
  });

  return NextResponse.json({ data: created });
}
