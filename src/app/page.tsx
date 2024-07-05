
export default function Home() {
  return (
    <div className="py-14 lg:py-24 container">
      <div className="gap-10 sm:gap-14 flex-col flex justify-center items-center lg:flex lg:flex-row">

        <div className="gap-10 sm:gap-14 flex-col flex justify-center items-center">
          <div className="flex relative justify-center items-center flex-col">
            <h1 className="bg-blue-100 text-nowrap text-xl xs:text-2xl sm:text-3xl font-bold text-blue-600 px-2 py-1 -rotate-2">
              BRITISH ONLINE SCHOOL
            </h1>
            <h1 className="bg-yellow-200 text-nowrap z-10 text-xl xs:text-2xl sm:text-3xl font-bold text-amber-500 px-2 py-1">
              EDUCATION FOR EVERY STAGE
            </h1>
          </div>

          <h1 className=" text-gray-900 text-3xl xs:text-4xl sm:text-5xl font-bold">Accredited, Holistic Online Schooling</h1>

          <p className=" leading-[26px] text-gray-900 font-semibold xs:text-lg">
            IWS Online School – Your compass in the digital realm of learning. Discover new horizons, Create lasting memories, and Lead the future with our live lessons.
          </p>

          <div className="flex flex-wrap gap-5">
            <button className=" border-blue-600 hover:text-white hover:bg-blue-600 transition-all duration-300 border-[3px] rounded-lg px-6 py-2 text-gray-900 font-semibold text-lg">Enrol now</button>
            <button className="bg-blue-600 rounded-lg px-6 py-2 text-white hover:bg-blue-700 transition-all duration-300 font-semibold text-lg">Contact Us</button>
          </div>

        </div>

        <img className="max-w-lg w-3/4 lg:w-[450px] xl:w-auto object-contain" src="./Hero.webp" alt="Hero Image" />


      </div>



      <div className="pt-16">
        <h1 className="text-gray-900 text-3xl text-center xs:text-4xl sm:text-5xl font-bold">The right study programme for you</h1>


        <div className="pt-10 grid grid-cols-1">
          <div className="relative bg-sky-100 rounded-xl flex flex-col justify-center items-center">
            <img className="max-w-lg w-4/5 object-contain -mt-10" src="./programm/Primary@2x.webp" alt="Hero Image" />

            <div className="bg-white">
              Primary School
            </div>

          </div>
        </div>


      </div>





    </div>
  );
}
