import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

 // ======= Speakers Banner ========= //
 function SpeakersBanner() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // ========= Speakers banner images ========= // 
  const banners = [
    { id: 1, img: "image/Speakers-cat-DES.jpg" },
    { id: 2, img: "image/Speakers-cat-DES2.jpg" },
    { id: 3, img: "image/Speakers-cat-DES3.jpg" },
  ];

  // ========== Custom navigation arrows ========= // 
  const NextArrow = ({ onClick }) => (
    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full cursor-pointer z-10 transition"
      onClick={onClick} 
      >
      <FaChevronRight className="text-lg sm:text-xl" />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full cursor-pointer z-10 transition"
      onClick={onClick}
    >
      <FaChevronLeft className="text-lg sm:text-xl" />
    </div>
  );

  // ========= React Slick settings ========= // 
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
              data-aos="fade-up"
            >
              {/* Banner Content */}
              <div className="text-center px-4">
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >
                  Powerful Speakers Collection
                </h2>
                <p className="text-gray-200 mt-4 text-sm sm:text-base md:text-lg max-w-md mx-auto"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Fill your room with rich, immersive sound from our latest
                  speaker range.
                </p>
                <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-2xl hover:bg-orange-600 transition"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section> 
    </>
  );
 }

 export default SpeakersBanner;
