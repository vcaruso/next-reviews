import React from 'react'
import Heading from '@/components/Heading'

export const metadata = {
  title: 'About'
}

export default function NotFoundPage() {
  return (
    <>
        <Heading>Not Found</Heading>
        <p>
            Oops, the page you requested only exists in a parallel universe.
        </p>
    </>
    
  )
}
