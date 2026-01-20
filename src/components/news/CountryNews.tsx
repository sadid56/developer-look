"use client";

import { Article } from "@/types/articles.types";
import useCountryNews from "../hooks/useCountryNews";
import NewsCard from "./NewsCard";
import NewsCardSkeleton from "./NewsCardSkeleton";
import { Button } from "../ui/button";
import Link from "next/link";

const CountryNews = ({ country }: { country: string }) => {
  const { data, isLoading, isError, error } = useCountryNews(country);
  console.log(data);

  if (isLoading) {
    return (
      <div className='container mx-auto grid grid-cols-3 py-10 gap-4'>
        {Array.from({ length: 6 }).map((_, idx) => (
          <NewsCardSkeleton key={idx} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <div className='text-center py-10'>Error loading news: {error?.message}</div>;
  }

  if (data?.articles.length === 0) {
    return (
      <div className='text-center py-10 w-fit mx-auto p-5'>
        <h2 className='text-3xl font-bold'>Opps!</h2>
        <p className='text-gray-700 mt-2 mb-4'>No news available for this country.</p>
        <Link href={"/"}>
          <Button className='cursor-pointer'>Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className='container mx-auto grid grid-cols-3 py-5 gap-4'>
      {data?.articles.map((article: Article, idx: number) => (
        <NewsCard key={idx + 1} article={article} />
      ))}
    </div>
  );
};

export default CountryNews;
