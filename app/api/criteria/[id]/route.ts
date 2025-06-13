import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const criteria = await prisma.criteria.findUnique({
    where: { id: (await params).id },
  });

  if (!criteria) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }

  return NextResponse.json({ data: criteria });
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const body = await req.json();
  const { criteria_name, weight, criterion_type } = body;

  const updated = await prisma.criteria.update({
    where: { id: (await params).id },
    data: {
      criteria_name,
      weight: parseFloat(weight),
      criterion_type,
    },
  });

  return NextResponse.json({ data: updated });
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const deleted = await prisma.criteria.delete({
    where: { id: (await params).id },
  });

  return NextResponse.json({ data: deleted });
}
