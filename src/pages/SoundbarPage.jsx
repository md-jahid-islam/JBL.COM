import Breadcrumb from "../components/breadcrumb/Breadcrumb"
import FilterSidebar from "../components/filterSidebar/FilterSidebar"
import ProductCard from "../components/productCard/ProductCard"

 function SoundbarPage() {
  return (
    <>
     <Breadcrumb />
      <div className='flex gap-2.5'>
        <FilterSidebar />
        <div className='flex flex-wrap gap-2.5'>
          <ProductCard />       
        </div>
      </div>
    </>
  )
 }

 export default SoundbarPage