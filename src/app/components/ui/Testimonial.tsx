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
          <div className='container max-w-4xl flex flex-col gap-14'>
            <p className='text-center text-p text-blue-900 leading-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, commodi obcaecati, molestiae ut facere eligendi perspiciatis tempora distinctio libero nobis placeat itaque repellat pariatur exercitationem adipisci quis? Aspernatur, enim porro.</p>

            <h2 className='  text-blue-600 text-center'>Emily Turner (Parent)</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='container max-w-4xl flex flex-col gap-14'>
            <p className='text-center text-p text-blue-900 leading-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, commodi obcaecati, molestiae ut facere eligendi perspiciatis tempora distinctio libero nobis placeat itaque repellat pariatur exercitationem adipisci quis? Aspernatur, enim porro.</p>

            <h2 className='  text-blue-600 text-center'>Emily Turner (Parent)</h2>
          </div>
        </SwiperSlide>


      </Swiper>
    </>
  )
}

export default Testimonial