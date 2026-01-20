import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Article } from "@/types/articles.types";
import Image from "next/image";
import { format } from "date-fns";
import Link from "next/link";

const NewsCard = ({ article }: { article: Article }) => {
  return (
    <Card className=' h-auto lg:h-[550px]'>
      <CardHeader>
        <div className='h-[270px] overflow-hidden'>
          <Image
            className='rounded-md hover:scale-105 h-[270px] transition-transform duration-300'
            src={article?.urlToImage || "/demo.jpg"}
            alt={article?.title || "No title"}
            width={500}
            height={200}
          />
        </div>
      </CardHeader>
      <CardContent>
        <Link href={article?.url || "#"} target='_blank' rel='noopener noreferrer'>
          <h2 className='text-2xl font-medium mb-3 hover:underline line-clamp-2'>{article?.title}</h2>
        </Link>
        <p className='line-clamp-3 text-gray-700'>{article?.description}</p>
      </CardContent>
      <CardFooter className='flex items-center justify-between gap-2'>
        <CardTitle className='text-sm'>Source: {article?.source?.name}</CardTitle>
        <CardDescription className='text-xs'>Published At: {format(new Date(article?.publishedAt), "dd MMM, yyyy")}</CardDescription>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
