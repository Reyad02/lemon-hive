"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useRef, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

interface CustomSliderProps<T> {
  items: T[];
  slidesPerView?: number;
  renderSlide: (item: T) => React.ReactNode;
}

const CustomSlider = <T,>({
  items,
  slidesPerView = 4,
  renderSlide,
}: CustomSliderProps<T>) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      <button
        ref={prevRef}
        className={`absolute top-1/3 -translate-y-1/2 left-2 z-10 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-200 transition-opacity ${
          activeIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <GrFormPrevious className="text-[#9DFE00] text-3xl" />
      </button>

      <button
        ref={nextRef}
        className={`absolute top-1/3 -translate-y-1/2 right-2 z-10 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-200 transition-opacity ${
          activeIndex >= items.length - slidesPerView
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }`}
      >
        <MdNavigateNext className="text-[#9DFE00] text-3xl" />
      </button>

      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          const nav = swiper.params.navigation as any;
          nav.prevEl = prevRef.current;
          nav.nextEl = nextRef.current;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="mySwiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{renderSlide(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomSlider;
