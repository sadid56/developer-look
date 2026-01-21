"use client";
import { Article } from "@/types/articles.types";
import useAllNews from "../hooks/useAllNews";
import NewsCard from "./NewsCard";
import Link from "next/dist/client/link";
import { Button } from "../ui/button";
import NewsCardSkeleton from "./NewsCardSkeleton";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import useDebounce from "../hooks/useDebounchSearch";

const AllNews = () => {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [ln, setLn] = useState("all");
  const debouncedSearch = useDebounce(search, 500);
  const { data, isLoading, isError, error } = useAllNews({ category: category, search: debouncedSearch, ln });

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

  if (data?.length === 0) {
    return (
      <div className='text-center py-10 w-fit mx-auto p-5'>
        <h2 className='text-3xl font-bold'>Opps!</h2>
        <p className='text-gray-700 mt-2 mb-4'>No news available for this time.</p>
        <Link href={"/"}>
          <Button className='cursor-pointer'>Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className='container mx-auto'>
      <div className='flex items-center gap-2'>
        <Select value={category} onValueChange={(value) => setCategory(value)}>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Select a category' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              <SelectItem value='all'>All</SelectItem>
              <SelectItem value='news'>News</SelectItem>
              <SelectItem value='sports'>Sports</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select value={ln} onValueChange={(value) => setLn(value)}>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Select a category' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Language</SelectLabel>
              <SelectItem value='all'>All</SelectItem>
              <SelectItem value='en'>English</SelectItem>
              <SelectItem value='bn'>Bangladesh</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className='px-8 py-1 rounded-md border border-gray-400'
          placeholder='Search...'
        />
      </div>
      <div className='container mx-auto grid grid-cols-3 py-5 gap-4'>
        {data.map((article: Article, idx: number) => (
          <NewsCard key={idx + 1} article={article} />
        ))}
      </div>
    </div>
  );
};

export default AllNews;
