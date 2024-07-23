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
          <h4 className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius optio, id dolor rerum illo quia officia, excepturi tempora, magnam labore iusto eligendi nulla? Commodi cupiditate, totam inventore recusandae nesciunt consequuntur.</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius optio, id dolor rerum illo quia officia, excepturi tempora, magnam labore iusto eligendi nulla? Commodi cupiditate, totam inventore recusandae nesciunt consequuntur.</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius optio, id dolor rerum illo quia officia, excepturi tempora, magnam labore iusto eligendi nulla? Commodi cupiditate, totam inventore recusandae nesciunt consequuntur.</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius optio, id dolor rerum illo quia officia, excepturi tempora, magnam labore iusto eligendi nulla? Commodi cupiditate, totam inventore recusandae nesciunt consequuntur.</p>
        </div>

      </div>
    </div>

  )
}

export default WhatAwait