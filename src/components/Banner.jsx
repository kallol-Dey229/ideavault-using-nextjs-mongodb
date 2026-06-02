"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const banners = [

  {
    image: "/assets/banner1.jpeg",
    title: "Share Your Idea Now",
    desc: "Turn your ideas into reality and connect with people worldwide.",
  },

  {
    image: "/assets/banner2.jpeg",
    title: "Let's Explore New Ideas Today",
    desc: "New day new idea. Add ideas and explore more",
  },

  {
    image: "/assets/banner3.jpeg",
    title: "Let's Show Your Creativity",
    desc: "Create new ideas and share it now. Creativity has no limits",
  }

];

const Banner = () => {

  return (

    <Swiper modules={[Navigation, Autoplay]} navigation autoplay={{ delay: 7000 }} loop>

      {
        banners.map((banner, index) => (

          <SwiperSlide key={index}>

            <div className="h-[42vh] sm:h-[55vh] md:h-[75vh] lg:h-[90vh] bg-cover bg-center flex items-center justify-center text-white px-4"
            style={{
                backgroundImage: `url(${banner.image})`
              }}>

              <div className="text-center max-w-xs sm:max-w-xl md:max-w-3xl">

                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4">

                  {banner.title}

                </h1>

                <p className="text-sm sm:text-lg md:text-xl mb-5">

                  {banner.desc}

                </p>

                <Link href={'/ideas'}>
                <button className="bg-cyan-600 px-4 py-2 cursor-pointer hover:bg-cyan-800 rounded-md sm:px-5 sm:py-3">Explore Now</button>
                </Link>

              </div>

            </div>

          </SwiperSlide>

        ))
      }

    </Swiper>

  );

};

export default Banner;