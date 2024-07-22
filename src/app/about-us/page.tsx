"use client";
import React from "react";
import Image from "next/image";
interface pageProps {}

const page: React.FC<pageProps> = ({}) => {
  return (
    <div>
      <div className="container gap-2">
        <div className="text-center rounded-3xl py-9 px-36 bg-blue-500 bg-[url('/Compass-star-1.png')] bg-cover bg-center bg-no-repeat">
          <h1 className="text-white">We are a revolution in learning.</h1>
          <p className="text-white">
            IWS is a Cambridge Assessment International accredited online
            school. Our mission is to offer a globally esteemed Cambridge
            education, making it accessible to remote learners with exceptional
            academic potential worldwide.
          </p>
          <p className="text-white">
            Thereby creating a global community of ambitious learners who wish
            to achieve their full potential, both inside and outside of the
            classroom.
          </p>
          <button className="bg-white rounded-md py-2 px-5 mt-9 text-blue-400">
            Join our next event
          </button>
        </div>
        <div className="bg-blue-900 p-[1.5px] mt-3"></div>
        <div className="flex">
          <div className=" w-1/3">
            <h1 className="">Our Approach to Teaching and Learning</h1>
          </div>
          <div className=" w-2/3">
            <p>
              At IWS Online School, we believe in harnessing the spirit of
              exploration, creativity and leadership to empower our students for
              a world of limitless possibilities. Our mission is to provide a
              transformative educational experience, guiding them towards a
              future where they actively Discover, Create and Lead.
            </p>
            <p>
              {
                "Step into the world of Infinite Wisdom School, where the radiant blue compass serves as a powerful symbol of our ethos. More than a mere guide, it embodies our unwavering faith in each student's boundless potential and our dedication to illuminating their brightest path. Here, education transcends traditional boundaries, stretching horizons beyond imagination. At IWS, every student is not just a learner, but a visionary, creator, and leader. We ignite flames of passion, fostering a realm where discovery, creation, and leadership intertwine seamlessly. This is more than education; it's an odyssey - a dynamic dance of growth and enlightenment."
              }
            </p>
          </div>
        </div>
        <div className="bg-blue-900 p-[1.5px] mt-3"></div>
        <div className="flex">
          <h1>Our Mission</h1>
          <div>
            <p>
              {
                "Discover - Beneath the boundless sky, at IWS, each student's voyage commences within. Pioneering assessments map strengths, passions, and potential, guiding them to their true north. Understanding their unique traits, we provide an invaluable compass for their educational journey."
              }
            </p>
            <p>
              {
                "Create - At IWS, armed with self-awareness, students embark on a journey of immense potential. They forge unique paths, conceiving innovative projects and orchestrating vibrant events. Here, knowledge and imagination merge, giving birth to a realm of endless creation."
              }
            </p>
            <p>
              {
                "Lead - Leadership is a harmonious blend of vision and action in IWS. Empowered with their voice, every student resonates in the world. Whether in clubs, Student Council, communities, or programmes like The Duke of Edinburgh, they shine as guiding lights, paving the way for others to follow."
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
