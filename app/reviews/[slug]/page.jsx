import React from 'react'

import Heading from '@/components/Heading';
import { getReview } from '@/lib/reviews';

export async function generateStaticParams(){
    return [
      { slug: 'hellblade' },
      { slug: 'hollow-knight' },
    
    ];

    
}

export default async function ReviewPage({params:{slug}}) {

 
 const review = await getReview(slug);
 console.log('[ReviewPage] rendering', slug)
  
  return (
    <>
        <Heading>{review.title}</Heading>
        <p className='italic pb-2'>{review.date}</p>
        <img src={review.image} width={640} height={360} className='mb-2 rounded' />
        <article dangerouslySetInnerHTML={{__html:review.body}}
          className='max-w-screen-sm prose prose-slate'
        
        />
    </>
    
  )
}
