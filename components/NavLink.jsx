'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function NavLink({children, href, prefetch}) {
    const pathname = usePathname();
    console.log('pathname:', pathname);
    if(pathname === href){
        return (
            <span className='text-orange-800  '>
                {children}
            </span>
        );
    }
    return (
    <Link href={href}
    className='text-orange-800 hover:underline '
  >
    {children}
  </Link>
  )
}
