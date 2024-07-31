import React from 'react'
import FurnitureGallery from '../component/FurnitureGallery'
import FurnitureList from '../component/FurnitureList'
import HeroSection from '../component/HeroSection'

function Home() {
  return (
    <div>
      <HeroSection/>
      <div className='-my-6 mb-10'>
        <h2 className="text-center text-3xl font-bold text-gray-800 mt-8">
          Most Popular
        </h2>
        <FurnitureList limit={8} />
     
      </div>
      
      <FurnitureGallery />
    </div>
  )
}

export default Home