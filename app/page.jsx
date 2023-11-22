import React from 'react'
import Heading from '@/components/Heading';
import Link from 'next/link';
import { getReviews } from '@/lib/reviews';
import Image from 'next/image';



export default async function HomePage() {
  const {reviews} = await getReviews(3);
  if(reviews.length === 0){
    return (
              <span>No still featured game</span>
    );
  
  }
  return (
    <>
        <Heading>Indie gamer</Heading>
        
        <p className='pb-3'>
            Only the best indie games, reviewd for you.
        </p>
        <ul className='flex flex-col gap-3'>
            {
              
                reviews.map( (review, index) => (
                  <li key={review.slug} className='bg-white 
                  rounded 
                  border 
                  shadow w-80  
                  hover:shadow-xl 
                  sm:w-full'
              >
                <Link href={`/reviews/${review.slug}`}
                  className='flex flex-col sm:flex-row'
                >
                  <Image alt={review.title} priority={index === 0} src={review.image} width={320} height={180} className='rounded-t sm:rounded-l sm:rounded-r:none' />
                  <div className='px-2 py-1 text-center sm:text-left'>
                    <h2 className='font-semibold font-orbitron'>{review.title}</h2>
                    <p className='hidden pt-2 sm:block'>{review.subtitle }</p>
                  </div>
                </Link>
              </li>

                  
                ))
              
            }
        </ul>
    </>
   
  )
}
