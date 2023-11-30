import React from 'react'

import Heading from '@/components/Heading';
import { getReview, getSlugs } from '@/lib/reviews';
import ShareLinkButton from '@/components/ShareLinkButton';
import ShareButtons from '@/components/ShareButtons';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/20/solid';
import CommentList from '@/components/CommentList';
import CommentForm from '@/components/CommentForm';

export async function generateStaticParams(){
    const slugs = await getSlugs(); 
    //console.log('[ReviewPage | generatedStaticParams:', slugs) ;
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({params:{slug}}){
  const review = await getReview(slug);
  if(! review){
    return notFound(); 
  }
  return {
    title: review.title
  };
}

export default async function ReviewPage({params:{slug}}) {

 
 const review = await getReview(slug);
 if(! review){
  return notFound(); 
}
  
  return (
    <>
        
        <Heading>{review.title}</Heading>
        <p className='font-semibold pb-3'>
          {review.subtitle}
        </p>
        <div className='flex gap-3 items-baseline'>
          <p className='italic pb-2'>{review.date}</p>
          <ShareLinkButton />
        </div>
        
        <Image src={review.image} width={640} height={360} className='mb-2 rounded' alt={review.title} priority/>
        <article dangerouslySetInnerHTML={{__html:review.body}}
          className='max-w-screen-sm prose prose-slate'
        
        />
        <section className='border-dashed border-t max-w-screen-sm mt-3 py-3'>
          <h2 className='font-bold flex gap-2 items-center text-xl'>
            <ChatBubbleBottomCenterTextIcon className='h-6 w-6' />
            Comments
          </h2>
          <CommentList slug={slug} />
          <CommentForm />
          
        </section>
    </>
    
  )
}
