import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router";

 // =========== AOS animation initialization ======= //
 function HeadphonesBanner() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  // ============ Banner images ============ // 
  const banners = [
    { id: 1, img: "image/Headphones-banner.png" },
    { id: 2, img: "image/Headphones-banner2.png" },
    { id: 3, img: "image/Headphones-banner3.png" },
  ];

  // =========== Custom Arrow Components =========== //
  const NextArrow = ({ onClick }) => (
    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full cursor-pointer z-10 transition" onClick={onClick} >
      <FaChevronRight className="text-lg sm:text-xl" />
    </div>
  );
  
 // ======= Prev Arrow ========== // 
  const PrevArrow = ({ onClick }) => (
    <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full cursor-pointer z-10 transition" onClick={onClick} >
      <FaChevronLeft className="text-lg sm:text-xl" />
    </div>
  );

  // ======== Slider settings with arrows =========== // 
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
    <section className="relative w-full">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id}>
            <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] bg-center bg-cover flex items-center justify-center relative"
              style={{ backgroundImage: `url(${banner.img})` }}
              data-aos="fade-up">
              {/* Content */}
              <div className="text-center px-4">
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg"
                  data-aos="zoom-in"
                  data-aos-delay="300" >
                  Premium Headphones Collection
                </h2>
                <p className="text-gray-200 mt-4 text-sm sm:text-base md:text-lg max-w-md mx-auto"
                  data-aos="fade-up"
                  data-aos-delay="500">
                  Experience crystal-clear sound and deep bass with our latest
                  headphones.
                </p>
                <Link to="/ViewMore" className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-2xl hover:bg-orange-600 transition" data-aos="fade-up" data-aos-delay="700">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
    </>
  );
 }
 export default HeadphonesBanner;
