import React from 'react'
import Hero from './Hero'
import TestimonialSlider from './Testimonials'
import Footer from '../Footer'
function Home() {
  return (
    <div className='mt-16'>
        <Hero/>
        <TestimonialSlider/>
        <Footer/>
    </div>
  )
}

export default Home