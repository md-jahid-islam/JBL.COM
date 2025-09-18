import React from 'react'
import HeadphonesBanner from '../components/Headphones/HeadphonesBanner'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import FilterSidebar from '../components/filterSidebar/FilterSidebar'
import ProductCard from '../components/productCard/ProductCard'
import ProductDetails from '../components/ProductDetails/ProductDetails'

function HeadphonePage() {
  return (
    <>
      <HeadphonesBanner />
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
      {/* <ProductDetails/> */}
    </>
  )
}

export default HeadphonePage