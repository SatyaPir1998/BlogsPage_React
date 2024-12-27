import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Img1 from "../../assets/hero-carousel/img1.jpg";
import Img2 from "../../assets/hero-carousel/img2.jpg";

import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-6 py-8 bg-gray-50 rounded-lg shadow-md overflow-hidden">
      {/* Text Section */}
      <div className="text-center sm:text-left mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-800 hover:text-indigo-600 transition-colors duration-300">
          IEM Blogs
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 hover:text-gray-800 transition-colors duration-300">
          Welcome to IEM Blogs—your gateway to insightful articles and inspiring
          stories! Explore, engage, and expand your knowledge with our latest
          posts.
        </p>
        <button className="mt-6 px-5 py-2 text-sm sm:text-base bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-lg">
          Read More
        </button>
      </div>

      {/* Image Section (Carousel) */}
      <div className="overflow-hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={Img1}
              alt="Slide 1"
              className="w-full h-auto sm:h-72 md:h-80 lg:h-96 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Img2}
              alt="Slide 2"
              className="w-full h-auto sm:h-72 md:h-80 lg:h-96 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
