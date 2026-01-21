import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const country = searchParams.get("country") || "us";

  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "API key missing" }, { status: 500 });
  }

  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`);

  const data = await res.json();
  return NextResponse.json(data);
}
