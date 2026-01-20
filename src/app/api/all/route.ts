import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const category = searchParams.get("category");

    const result = await prisma.article.findMany({
      where: {
        category,
      },
    });
    return NextResponse.json({ message: "✅ Articles seeded successfully!", result });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json({ error: "Failed to seed articles", details: error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
