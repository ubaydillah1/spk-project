/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const deleted = await prisma.alternative.delete({
      where: { id: (await params).id },
    });

    return NextResponse.json({ data: deleted });
  } catch (err) {
    return NextResponse.json(
      { error: "Gagal menghapus alternatif" },
      { status: 500 }
    );
  }
}