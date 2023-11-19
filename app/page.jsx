import React from 'react'
import Heading from '@/components/Heading';
import Link from 'next/link';
import { getFeaturedReview } from '@/lib/reviews';



export default async function HomePage() {
  var featured = await getFeaturedReview();
  console.log(featured);
  return (
    <>
        <Heading>Indie gamer</Heading>
        
        <p className='pb-3'>
            Only the best indie games, reviewd for you.
        </p>
        {
          featured ?
          (
            <div className='bg-white 
                rounded 
                border 
                shadow w-80  
                hover:shadow-xl 
                sm:w-full'
            >
              <Link href={`/reviews/${featured.slug}`}
                className='flex flex-col sm:flex-row'
              >
                <img src={featured.image} width={320} height={180} className='rounded-t sm:rounded-l sm:rounded-r:none' />
                <h2 className='font-semibold font-orbitron py-1 text-center sm:px-2'>Hollow Knight</h2>
              </Link>
            </div>
          )
          :
          (
            <span>No still featured game</span>
          )
        
          }
        
        
    </>
   
  )
}
