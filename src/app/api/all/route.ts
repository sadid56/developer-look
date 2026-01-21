/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const category = searchParams.get("category");
    const search = searchParams.get("search");
    const ln = searchParams.get("ln");

    const where: any = {};

    if (category && category !== "all") {
      where.category = category;
    }

    if (ln && ln !== "all") {
      where.language = ln;
    }

    if (search) {
      where.OR = [
        {
          title: { contains: search, mode: "insensitive" },
        },
      ];
    }

    const result = await prisma.article.findMany({
      where,
    });
    return NextResponse.json({ message: "✅ Articles seeded successfully!", result });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json({ error: "Failed to seed articles", details: error }, { status: 500 });
  }
}
