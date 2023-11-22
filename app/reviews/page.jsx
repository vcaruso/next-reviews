import Link from 'next/link'
import React from 'react'
import Heading from '@/components/Heading'
import { getReviews } from '@/lib/reviews'
import Image from 'next/image'
import PaginationBar from '@/components/PaginationBar'

const PAGE_SIZE = 6;

export const metadata = {
  title: 'Reviews'
}



export default async function ReviewsPage({searchParams}) {

  const page = parsePageParam(searchParams.page);
  const {reviews, pageCount} = await getReviews( PAGE_SIZE ,page);
  console.log('[ReviewsPage] rendering:', page);
  return (
    <>
      <Heading>Reviews</Heading>
      <PaginationBar page={page} pageCount={pageCount} />
      <ul className='flex flex-row flex-wrap gap-3'>
        {
          reviews.map((review, index)=>(
            <li key={review.slug} className='bg-white rounded border shadow w-80 hover:shadow-xl'>
              <Link href={`/reviews/${review.slug}`}>
                <Image src={review.image} width={320} height={180} className='rounded-t' alt={reviews.title} priority={index === 0} />
                <h2 className='font-semibold font-orbitron py-1 text-center'>{review.title}</h2>
              </Link>
            </li>

          ))
        }
        
        
      </ul >
    </>

  )
}


function parsePageParam(paramValue){
  if(paramValue){
    const page = parseInt(paramValue);
    if(isFinite(paramValue) && page > 0 ){
      return page;
    }
  }
  return 1;
}