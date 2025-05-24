"use client";

import ShowData from "@/components/shared/ShowData";
import { ILocation } from "@/src/types/location";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Locations = ({ locations }: { locations: ILocation[] }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slidesPerView = 4;

  return (
    <div className="relative">
      <button
        ref={prevRef}
        className={`absolute top-1/2 -translate-y-1/2 left-2 z-10 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-200 transition-opacity ${
          activeIndex === 0 ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <GrFormPrevious className="text-[#9DFE00] text-3xl" />
      </button>

      <button
        ref={nextRef}
        className={`absolute top-1/2 -translate-y-1/2 right-2 z-10 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold hover:bg-gray-200 transition-opacity ${
          activeIndex >= locations.length - slidesPerView
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }`}
      >
        <MdNavigateNext className="text-[#9DFE00] text-3xl" />
      </button>

      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={20}
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
        {locations.map((location) => (
          <SwiperSlide key={location.id}>
            <ShowData uniqueIdentifier={String(location.id)} value={location.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Locations;
