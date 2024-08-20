"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import Image from 'next/image';


interface CarouselProps {

}

const Carousel: React.FC<CarouselProps> = ({ }) => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={100}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        breakpoints={{
          500: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 6,
          }
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image width={1000} height={1000} className='' src="/carousel/GOC.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={1000} height={1000} className='' src="/carousel/HighEdu_logo.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={1000} height={1000} className='' src="/carousel/Artizy_logo.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={1000} height={1000} className='' src="/carousel/Eduland.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={1000} height={1000} className='' src="/carousel/GOC.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={1000} height={1000} className='' src="/carousel/HighEdu_logo.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={1000} height={1000} className='' src="/carousel/Artizy_logo.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image width={1000} height={1000} className='' src="/carousel/Eduland.webp" alt="" />
        </SwiperSlide>
        


      </Swiper>
    </>
  )
}

export default Carousel