import React from 'react'
import {
  ArrowRightCircleIcon,
  PlusIcon,
  MinusIcon,
} from "@heroicons/react/24/solid";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
interface WhatAwaitProps {

}

const WhatAwait: React.FC<WhatAwaitProps> = ({ }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-10 border-t-4 pt-6 border-blue-400">
      <div className="lg:w-5/12">
        <h2 className=" leading-tight ">
          What Awaits you at IWS Online School?
        </h2>
      </div>
      <div className="flex flex-col gap-y-8 lg:w-7/12 lg:pr-6">
        <div className="space-y-3">
          <h4 className="font-bold">Visionary Educators of IWS Online School</h4>
          <p>{"Explore the difference our passionate and committed teachers make in every student's learning journey."}</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold">Our teachers are always in touch</h4>
          <p>{"Our experienced teachers and mentors are just a message away, ready to assist with lesson-related queries and provide quidance on navigating our online learnina platorm."}</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold">Individual Programmes</h4>
          <p>{"Every child is unique. Our personalized assessments and success coaching ensure tallore educational paths for every student."}</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold">Dynamic Live Lessons</h4>
          <p>{"We prioritize holistic education, combining academic excellence with skill development for a comprehensive learnina experience."}</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold">Accredited Curriculum</h4>
          <p>{"Experience structured sessions for active participation and collaboration, fostering growth in academics and personal development."}</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold">Taking care of parents</h4>
          <p>{"Our support specialists are always ready to assist, and our bi-weekly parent assemblies offer a platform to discuss any topic and connect with like-minded families worldwide."}</p>
        </div>

      </div>
    </div>

  )
}

export default WhatAwait