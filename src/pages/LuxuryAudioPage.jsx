import React from 'react'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import FilterSidebar from '../components/filterSidebar/FilterSidebar'
import ProductCard from '../components/productCard/ProductCard'
import LuxuryAudioBanner from '../components/luxuryAudio/LuxuryAudioBanner'
 
 // ========= Luxury Audio Page ========= // 
 function LuxuryAudioPage() {
  return (
    <>
      <LuxuryAudioBanner />
      <Breadcrumb />
      <div className='flex gap-2.5'>
        <FilterSidebar />
        <div className='flex flex-wrap gap-2.5'>          
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  )
 }

 export default LuxuryAudioPage