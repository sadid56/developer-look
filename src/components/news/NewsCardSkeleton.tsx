import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

// this skeleton component i have generated using chatgpt

const NewsCardSkeleton = () => {
  return (
    <Card className='h-auto lg:h-[550px] animate-pulse'>
      {/* Image Skeleton */}
      <CardHeader>
        <div className='h-[270px] bg-gray-300 rounded-md' />
      </CardHeader>

      {/* Content Skeleton */}
      <CardContent>
        <div className='h-8 w-3/4 mb-3 bg-gray-300 rounded'></div> {/* Title */}
        <div className='h-5 w-full mb-2 bg-gray-200 rounded'></div> {/* Description line 1 */}
        <div className='h-5 w-5/6 mb-2 bg-gray-200 rounded'></div> {/* Description line 2 */}
        <div className='h-5 w-2/3 bg-gray-200 rounded'></div> {/* Description line 3 */}
      </CardContent>

      {/* Footer Skeleton */}
      <CardFooter className='flex items-center justify-between gap-2'>
        <div className='h-4 w-1/3 bg-gray-300 rounded'></div> {/* Source */}
        <div className='h-4 w-1/4 bg-gray-300 rounded'></div> {/* Published At */}
      </CardFooter>
    </Card>
  );
};

export default NewsCardSkeleton;
