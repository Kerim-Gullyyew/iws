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
        spaceBetween={30}
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
            slidesPerView: 5,
          }
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image className='' src="./carousel/GOC-1024x1024.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='' src="./carousel/GOC-1024x1024.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='' src="./carousel/GOC-1024x1024.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='' src="./carousel/GOC-1024x1024.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='' src="./carousel/GOC-1024x1024.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='' src="./carousel/GOC-1024x1024.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='' src="./carousel/GOC-1024x1024.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className='' src="./carousel/GOC-1024x1024.webp" alt="" />
        </SwiperSlide>


      </Swiper>
    </>
  )
}

export default Carousel