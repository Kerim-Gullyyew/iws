import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../utils/styles.css'
// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
interface TestimonialProps {

}

const Testimonial: React.FC<TestimonialProps> = ({ }) => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className='px-2 sm:px-0 sm:container max-w-4xl flex flex-col gap-7 sm:gap-14'>
            <p className='text-center text-p text-blue-900 leading-8 sm:leading-10'>“Enrolling my child in IWS Online School was the best decision we made. The flexible schedule and personalised attention helped my child excel academically. The curriculum is top-notch, and the instructors are exceptional. Thank you, IWS!” </p>

            <h4 className='  text-blue-600 text-center'>Sarah Thompson (Parent)</h4>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='px-2 sm:px-0 sm:container max-w-4xl flex flex-col gap-7 sm:gap-14'>
            <p className='text-center text-p text-blue-900 leading-8 sm:leading-10'>“IWS Online School provided me with a quality education that laid a strong foundation for my future. The interactive learning experience and 24/7 access to lessons were invaluable. I highly recommend IWS to any student seeking a flexible and enriching academic journey.”</p>

            <h4 className='  text-blue-600 text-center'>Charlotte Rodriguez (IGCSE)</h4>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='px-2 sm:px-0 sm:container max-w-4xl flex flex-col gap-7 sm:gap-14'>
            <p className='text-center text-p text-blue-900 leading-8 sm:leading-10'>“Being a part of IWS Online School has been a fantastic journey. The virtual classrooms provide a dynamic learning environment, and the comprehensive resources. The teachers are amazing - they make complex subjects easy to understand and are invested in our success.”</p>

            <h4 className='  text-blue-600 text-center'>Eleanor Smith (A Level)</h4>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='px-2 sm:px-0 sm:container max-w-4xl flex flex-col gap-7 sm:gap-14'>
            <p className='text-center text-p text-blue-900 leading-8 sm:leading-10'>“IWS Online School has been a revelation for me. The interactive virtual classes and well-structured curriculum have made learning a truly enriching experience. The teachers are not just knowledgeable but also approachable, always ready to help. Thank you, IWS!”</p>

            <h4 className='  text-blue-600 text-center'>Jinsha Peter (A Level)</h4>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='px-2 sm:px-0 sm:container max-w-4xl flex flex-col gap-7 sm:gap-14'>
            <p className='text-center text-p text-blue-900 leading-8 sm:leading-10'>{"“As a parent, I am thoroughly impressed with IWS Online School. The dedication of the instructors and the emphasis on goal-driven education have had a profound impact on my child's academic growth. The supportive community fostered by IWS is truly Commendable.”"}</p>

            <h4 className='  text-blue-600 text-center'>Emily Turner (Parent)</h4>
          </div>
        </SwiperSlide>


      </Swiper>
    </>
  )
}

export default Testimonial