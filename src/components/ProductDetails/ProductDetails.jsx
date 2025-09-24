import React, { useState } from "react";
import {
  FaStar,
  FaTruck,
  FaPhone,
  FaHeadphones,
  FaCartPlus,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaUndo,
  FaExchangeAlt,
  FaTimesCircle,
  FaQrcode,
  FaStore,
  FaArrowLeft,
} from "react-icons/fa";

 // ======== slider =========== // 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";
 
 // =========== ProductDetails ============ // 
 function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("features");
  const [activeImage, setActiveImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState("Black");
 
  // ============== variants ========== // 
  const variants = ["Black", "Blue", "White"];
  const productImages = ["/image/01.webp", "/image/01.webp", "/image/01.webp", "/image/01.webp","/image/01.webp",  "/image/01.webp",  "/image/01.webp", "/image/01.webp", "/image/01.webp",  "/image/01.webp", ];
  const relatedProducts = [
    { id: 1, name: "Wireless Headphones", price: 2499, img: "/image/gamingheadset.png" },
    { id: 2, name: "Bluetooth Speaker", price: 1999, img: "/image/bluetho.png" },
    { id: 3, name: "Gaming Headset", price: 3499, img: "/image/gamingheadset.png" },
    { id: 4, name: "Earbuds Pro", price: 2999, img: "/image/earburds.png" },
  ];
 
  // ======== handlePrevImage ========= // 
  const handlePrevImage = () => {
    setActiveImage((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
  };
  
  // ========== handleNextImage ========== // 
  const handleNextImage = () => {
    setActiveImage((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
  };

   // ============ sliderSettings ========== // 
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
    <section className="py-10 px-4 sm:px-6 lg:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Back Button */}
        <Link to="#" className="mb-4 flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
          <FaArrowLeft /> Back to Home
        </Link>

        {/* Main Product Section */}
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 bg-white p-6 rounded-2xl shadow-lg">
          {/* Image Slider */}
          <div className="w-full md:w-1/2 relative group">
            <img src={productImages[activeImage]} alt="Product" className="w-full h-[450px] object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"/>
            <button onClick={handlePrevImage} className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
              <FaChevronLeft />
            </button>
            <button onClick={handleNextImage} className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition">
              <FaChevronRight />
            </button>

            {/* Thumbnails */}
            <div className="mt-4 flex gap-3 overflow-x-auto">
              {productImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  onClick={() => setActiveImage(idx)}
                  alt={`thumb-${idx}`}
                  className={`w-16 h-16 cursor-pointer rounded-lg border-2 transition ${
                    activeImage === idx
                      ? "border-blue-500 scale-105"
                      : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                JBL Tune Beam 2
              </h1>
              <p className="text-gray-500 mt-1 text-sm md:text-base">
                JBL Pure Bass Sound with Spatial Sound
              </p>
              <p className="text-2xl md:text-3xl font-bold text-blue-600 mt-3">
                ₹5,999
              </p>

              {/* Variants */}
              <div className="mt-5">
                <h4 className="font-semibold mb-2">Color:</h4>
                <div className="flex gap-3">
                  {variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-4 py-2 rounded-full font-medium border transition ${
                        selectedVariant === v
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent"
                          : "bg-white text-gray-800 border-gray-300 hover:border-blue-500"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mt-5 flex items-center gap-4">
                <label>Quantity:</label>
                <div className="flex items-center border rounded-md overflow-hidden">
                  <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 transition"> -
                  </button>
                  <input type="text" value={quantity} readOnly className="w-12 text-center border-l border-r border-gray-300"/>
                  <button onClick={() => setQuantity((prev) => prev + 1)} className="px-4 py-2 bg-gray-200 hover:bg-gray-300 transition"> +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <Link to="/CheckOut" className="mt-6 inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition" >
                <FaCartPlus className="mr-2" /> Add {quantity} to Cart
              </Link>
            </div>
          </div>
        </div>

        {/* Delivery Options */}
        <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Delivery Options</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>Select Your Location</span>
            </div>
            <div className="flex items-center gap-3">
              <FaTruck className="text-green-500" />
              <span>Standard Delivery Available</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMoneyBillWave className="text-orange-500" />
              <span>Cash on Delivery Available</span>
            </div>
            <div className="flex items-center gap-3">
              <FaUndo className="text-purple-500" />
              <span>Return & Warranty Support</span>
            </div>
            <div className="flex items-center gap-3">
              <FaExchangeAlt className="text-yellow-500" />
              <span>Change of Mind Accepted</span>
            </div>
            <div className="flex items-center gap-3">
              <FaUndo className="text-pink-500" />
              <span>14 Days Easy Return</span>
            </div>
            <div className="flex items-center gap-3">
              <FaTimesCircle className="text-red-500" />
              <span>Warranty Not Available</span>
            </div>
            <div className="flex items-center gap-3">
              <FaQrcode className="text-gray-600" />
              <span>Scan with Mobile</span>
            </div>
          </div>
        </div>

        {/* Seller Info */}
        <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Seller Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
            <p><strong>Sold by:</strong> Good Man</p>
            <p><strong>Positive Ratings:</strong> 89%</p>
            <p><strong>Ship on Time:</strong> 100%</p>
            <p><strong>Chat Response Rate:</strong> Not enough data</p>
          </div>
          <div className="flex gap-3 mt-4">
            <Link to="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <FaStore /> Go to Store
            </Link>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-5 text-gray-800">Related Products</h3>
          <Slider {...sliderSettings}>
            {relatedProducts.map((prod) => (
              <div key={prod.id} className="px-2">
                <div className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition flex flex-col items-center">
                  <img
                    src={prod.img}
                    alt={prod.name}
                    className="w-32 h-32 object-cover rounded-lg mb-3"
                  />
                  <p className="font-medium text-center">{prod.name}</p>
                  <p className="text-blue-600 font-bold mt-1">₹{prod.price}</p>
                  <button className="mt-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-xl hover:from-purple-500 hover:to-blue-500 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
    </>
  );
 }

 export default ProductDetails;

