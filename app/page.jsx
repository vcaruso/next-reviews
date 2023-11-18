import React from 'react'
import Heading from '@/components/Heading';
import Link from 'next/link';

export default function HomePage() {
  console.log('[Homepage] rendering');
  return (
    <>
        <Heading>Indie gamer</Heading>
        
        <p className='pb-3'>
            Only the best indie games, reviewd for you.
        </p>
        <div className='bg-white rounded border shadow w-80  hover:shadow-xl sm:w-full'>
          <Link href="/reviews/hollow-knight"
            className='flex flex-col sm:flex-row'
          >
            <img src="/images/hollow-knight.jpg" width={320} height={180} className='rounded-t sm:rounded-l sm:rounded-r:none' />
            <h2 className='font-semibold font-orbitron py-1 text-center sm:px-2'>Hollow Knight</h2>
          </Link>
        </div>
    </>
   
  )
}
