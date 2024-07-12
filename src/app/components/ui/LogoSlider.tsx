import Image from 'next/image';
import React, { useEffect } from 'react'

interface LogoSliderProps {

}



const logos = [
  '3m.svg',
  'barstool-store.svg',
  'budweiser.svg',
  'buzzfeed.svg',
  'forbes.svg',
  'macys.svg',
  'menshealth.svg',
  'mrbeast.svg'
];



const LogoSlider: React.FC<LogoSliderProps> = ({ }) => {

  useEffect(() => {
    const logosSlide = document.querySelector<HTMLElement>(".logos-slide");
    if (logosSlide) {
      const copy = logosSlide.cloneNode(true) as HTMLElement;
      const logosContainer = document.querySelector<HTMLElement>(".logos");
      if (logosContainer) {
        logosContainer.appendChild(copy);
      }
    }
  }, []);


  return (
    <div className="logos overflow-hidden py-15 bg-white relative">
      <div className="logos-slide inline-block animate-slide">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={`./logos/${logo}`}
            alt={`${logo}`}
            className="h-12 mx-10"
          />
        ))}
      </div>
    </div>
  )
}

export default LogoSlider