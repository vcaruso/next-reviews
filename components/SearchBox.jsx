'use client';
import { useIsClient } from '@/lib/hooks';
import { Combobox } from '@headlessui/react'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce';




export default function SearchBox() {
  const router = useRouter();
  const isClient  = useIsClient();
  const [query, setQuery] = useState('');
  const [debounceQuery] = useDebounce(query,300);
  const [reviews,setReviews] = useState([]);
  useEffect(()=>{
    //fetch reviews 
    const controller = new AbortController() ;
    if(debounceQuery.length > 1){
      
      (async function(){
        const url = `/api/search?query=${ encodeURIComponent(debounceQuery)}`;
        const response = await fetch(url, { signal: controller.signal });
        if(response.status == 200){
          const reviews = await response.json();          
          setReviews(reviews);
        } else {
          throw Error(response.status);
        }
        
      })();
    } else {
      setReviews([]);
    }
    return () => controller.abort()
  },[debounceQuery]);

  //console.log('[SearchBox] reviews:', {query, debounceQuery});

  const handleChange = (review) => {
    //console.log("[handleChange]:",review);
    router.push(`/reviews/${review.slug}`);
  };

  if(!isClient){
    return null;
  }
 
  return (
    <div className='relative w-40'>   
      <Combobox onChange={handleChange}>
        <Combobox.Input placeholder='Search...' value={query} onChange={(event)=>setQuery(event.target.value)} className='border rounded w-full' />
        <Combobox.Options className="absolute px-2 py-1 bg-white w-full">
            {reviews.map((review)=>(            
                <Combobox.Option key={review.slug} value={review}>
                  {
                    ({active}) => (  <span className={`block px-2 truncate w-full ${ active ? 'bg-orange-100' : ''}`}>{review.title}</span>)
                  }
                
                  
                </Combobox.Option>
            ))}
        </Combobox.Options>
      </Combobox>
    </div>
  )
   
   
}
