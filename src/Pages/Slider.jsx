import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// const img = {img:
//   img: ,
//   img:}

const Slider = () => {
  const slides = [
    {
      image: "https://i.ibb.co/4wbMTBM0/img1.jpg",
      text: "United for a Better Tomorrow",
      subtitle:
        "See how your contribution creates lasting impact through our volunteer programs.",
    },
    {
      image: "https://i.ibb.co/cKP5SYbj/img2.jpg",
      text: "Be The Change You Wish To See",
      subtitle:
        "Volunteer, donate, or support initiatives that uplift lives across Bangladesh",
    },
    {
      image: "https://i.ibb.co/MYVTXX2/img3.png",
      text: "Empowering Communities, One Volunteer at a Time",
      subtitle:
        "Discover stories of hope, courage, and change from our dedicated volunteers.",
    },
  ];
  return (
    <div className="w-full h-[550px] relative overflow-hidden z-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full ">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center flex-col gap-4">
                <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                  {slide.text}
                </h2>
                <p className="text-base-300 text-xl md:text-2xl f text-center px-4">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
