import {HeroSection} from '@/components/heroSection/HeroSection'
import Intro from '@/components/homepage/Intro'
import { Review } from '@/components/testimonial/Review'
import React from 'react'

function Page() {
  return (
    <div className=' '>
      <HeroSection/>
      <Intro/>
      <Review/>
    </div>
  )
}

export default Page