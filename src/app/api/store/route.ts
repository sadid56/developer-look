import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

const articles = [
  {
    author: "Perry Stein",
    title: "FBI opened probe on Minneapolis shooting; none exists now, Justice Dept. says - The Washington Post",
    description:
      "After the death of Renée Good in Minneapolis, FBI agents launched a civil rights probe into the shooting. The Justice Department says no such case now exists.",
    content:
      "In the immediate aftermath of the death of Renée Good in Minneapolis, FBI agents launched a civil rights investigation into the actions of the immigration officer who shot her...",
    publishedAt: new Date("2026-01-19T06:30:07Z"),
    url: "https://www.washingtonpost.com/national-security/2026/01/18/fbi-minnesota-shooting-civil-rights-investigation/",
    urlToImage:
      "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ZCA7X5CCWTNJSJUVR2ZTSHVC6M_size-normalized.JPG&w=1440",
    sourceId: "the-washington-post",
    sourceName: "The Washington Post",
    category: "news",
    language: "en",
    status: "published",
  },
  {
    author: null,
    title: "Rams end the Bears’ magical run and the Patriots ease past the Texans to set up NFL’s final four - CNN",
    description: "The Rams and Patriots are moving on to the conference championship round after victories on Sunday in the NFL playoffs",
    content:
      "It wasnt always pretty, but the New England Patriots have found a way to get past the Houston Texans to set up an AFC conference championship matchup against the Denver Broncos...",
    publishedAt: new Date("2026-01-19T03:33:00Z"),
    url: "https://www.cnn.com/sport/live-news/nfl-playoffs-texans-patriots-rams-bears-01-18-26",
    urlToImage: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2256970976.jpg?c=16x9&q=w_800,c_fill",
    sourceId: "cnn",
    sourceName: "CNN",
    category: "sports",
    language: "en",
    status: "published",
  },
  {
    author: "Liam McKeone",
    title: "Texans’ C.J. Stroud Makes Unfortunate NFL History With Wild Run of Turnovers in Playoffs - Sports Illustrated",
    description: "C.J. Stroud’s turnover numbers this postseason are unlike anything the NFL has ever seen.",
    content:
      "Texans quarterback C.J. Stroud entered this years NFL playoffs regarded as one of the better signal-callers left playing in the chase for the Super Bowl...",
    publishedAt: new Date("2026-01-18T23:00:19Z"),
    url: "https://www.si.com/nfl/texans-cj-stroud-unfortunate-nfl-history-turnovers-in-playoffs",
    urlToImage:
      "https://images2.minutemediacdn.com/image/upload/c_crop,x_0,y_87,w_3430,h_1929/c_fill,w_1440,ar_1440:810,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/si/01kf9kdtdm6js81h4m4r.jpg",
    sourceId: null,
    sourceName: "Sports Illustrated",
    category: "sports",
    language: "en",
    status: "published",
  },
];

export async function POST(req: NextRequest) {
  try {
    await prisma.article.createMany({
      data: articles,
      skipDuplicates: true,
    });

    return NextResponse.json({ message: "✅ Articles seeded successfully!" });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json({ error: "Failed to seed articles", details: error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
