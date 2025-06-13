/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const alternatives = await prisma.alternative.findMany({
    include: {
      user: true,
      values: {
        include: {
          criteria: true,
        },
      },
    },
  });

  return NextResponse.json({ data: alternatives });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log(body);
    const { name, userId, values } = body;

    if (!name || !userId) {
      return NextResponse.json(
        { error: "Name dan userId wajib diisi" },
        { status: 400 }
      );
    }

    const created = await prisma.alternative.create({
      data: {
        name,
        userId,
        values: {
          create:
            values?.map((val: any) => ({
              criteriaId: val.criteriaId,
              value: val.value,
            })) || [],
        },
      },
    });

    return NextResponse.json({ data: created });
  } catch (err) {
    return NextResponse.json(
      { error: "Gagal menambahkan alternatif" },
      { status: 500 }
    );
  }
}
