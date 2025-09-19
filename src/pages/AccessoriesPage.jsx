import React from 'react'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import FilterSidebar from '../components/filterSidebar/FilterSidebar'
import ProductCard from '../components/productCard/ProductCard'
 
 // ========== Accessories Page ========== // 
 function AccessoriesPage() {
  return (
    <>
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

 export default AccessoriesPage