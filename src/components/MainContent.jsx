import React from 'react';
import pic3 from '../assets/pic3.png'

const MainContent = () => {
  return (
    <div className='flex flex-col pt-16 lg:pt-0 bg-[oklch(0.19_0_0)]'>

      <div className="text-white mb-4 lg:mb-8 w-full p-4 lg:p-6 text-lg lg:text-xl border-b border-gray-700">
        Securing Your Flutter App: Best Practices and Techniques
      </div>
      

      <div className='flex flex-col lg:flex-row items-center lg:items-start'>
        <div className="px-4 lg:px-6 mt-4 lg:mt-10 flex-1">

          <h1 className="text-2xl sm:text-4xl lg:text-4xl xl:text-5xl font-light mb-6 lg:mb-8 leading-tight text-center lg:text-left">
            Unlock the Potential
            <br />
            of Flutter
          </h1>


          <p className="text-lg lg:text-xl text-gray-300 mb-8 lg:mb-12 text-center lg:text-left">
            Your Premier Partner for Cross-Platform
            <br />
            App Excellence!
          </p>

          <div className="text-center lg:text-left mb-8 lg:mb-16">
            <button className="bg-[#09a7ce] hover:bg-[#0891a5] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-sm lg:text-md font-medium transition-colors duration-200">
              UPGRADE YOUR TECH
            </button>
          </div>
        </div>

        <div className="flex-shrink-0 px-4 lg:px-0">
          <img className='w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-auto' src={pic3} alt="Flutter illustration" />
        </div>
      </div>

      <div className='flex flex-col lg:flex-row items-center lg:items-end gap-6 lg:gap-8 p-4 lg:p-6'>

        <div className="lg:w-1/3 text-center lg:text-left">
          <h2 className="text-3xl ml-4 lg:text-4xl xl:text-5xl font-light mb-2 lg:mb-4">
            Flutter's
            <br />
            Dawn
          </h2>
          <p className="text-gray-400 text-sm lg:text-base">History of flutter</p>
        </div>


        <div className="lg:w-1/3 text-center lg:text-left">
          <p className="text-gray-300 text-sm lg:text-md leading-relaxed mb-6 lg:mb-8">
            Uncover the fascinating story of Flutter in 'Flutter's Dawn: History of Flutter.' 
            From humble origins to global acclaim, delve into its captivating narrative. 
            Explore milestones, triumphs, and challenges. Whether tech enthusiast or curious mind, 
            join us on this captivating journey! {' '}
            <span className="text-blue-400 cursor-pointer hover:underline transition-all duration-200">
              Click to begin!
            </span>
          </p>
        </div>


        <div className='lg:w-1/3 flex justify-center lg:justify-end'>
          <button className="bg-[#09a7ce] text-white px-6 lg:px-8 py-3 rounded-full flex items-center space-x-2 transition-colors duration-200 group">
            <span className="text-sm lg:text-base">BEGIN</span>
            <svg 
              className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;