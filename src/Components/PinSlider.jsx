import React from 'react';
import '../styles.css';

import slides1 from '../assets/slide1.avif';
import slides2 from '../assets/slides2.avif';
import slides3 from '../assets/slides3.avif';

import { ArrowLongRightIcon } from '@heroicons/react/20/solid';

const PinSlider = () => {
  return (
    <div className="lg:flex  flex-col lg:flex-row h-full w-full lg:mt-16 justify-center mx-auto lg:space-x-40 ">
      {/* Left Column */}
      <div className="lg:flex flex-col lg:max-w-screen-sm h-full  sticky top-[100px]  justify-center ">
        <p className='text-[48px] font-bold font-mabry max-w-[450px] lg:text-start mt-32 mx-auto lg:mx-0 leading-tight'>
          Present your ideas in the best light
        </p>
        <p className="mt-10 lg:text-[18px] text-[16.5px] text-black font-graphik text-start mx-5 md:mx-auto md:max-w-[550px] ">
          uMake's groundbreaking on-device rendering feature will make your designs shine in a new light! Create full presentations using the Slides feature or quickly annotate and mark up your design using the Markup tools. Everything you need, all in one place.
        </p>

        <div className="mx-5 md:mx-auto lg:mx-0 mt-5 lg:mt-5 relative group text-black max-w-[140px]">
          <span className="font-bold hover:text-black text-[15px] flex items-center rounded-lg cursor-pointer border-[1px] py-3 px-2 border-black text-start justify-start font-mabry">
            Learn More
            <ArrowLongRightIcon className="w-4 h-4 relative flex left-2.5 transform group-hover:ml-[1px] transition-transform duration-200" />
          </span>
        </div>
      </div>

      {/* Right Column with Slides */}
      <div className="flex flex-col space-y-32 max-w-full max-h-full justify-center items-center text-center pt-32 pb-32">

        <div className="flex-col bg-white rounded-[2.5rem] shadow-2xl shadow-black md:w-[460px] mx-10 transition-transform duration-500 ease-in-out transform opacity-0 translate-y-10 animate-slide-in">
          <img src={slides1} className='max-w-[200px] mx-auto relative bottom-[50px] h-auto block items-center justify-center' />
          <h1 className='mb-5 text-[24px] font-bold font-mabry'>Smart Slides</h1>
          <p className='text-[18px] pb-12 font-mabry xl:mx-[85px]'>
            Configure each element in your scene slide-by-slide. Create different content variations or tell your story from different angles.
          </p>
        </div>

        <div className="flex-col bg-white rounded-[2.5rem] shadow-2xl shadow-black md:max-w-[460px] mx-10 transition-transform duration-500 ease-in-out transform opacity-0 translate-y-10 animate-slide-in">
          <img src={slides2} className='max-w-[200px] mx-auto relative bottom-[50px] h-auto block items-center justify-center' />
          <h1 className='mb-5 text-[24px] font-bold font-mabry'>Powerful rendering</h1>
          <p className='text-[18px] pb-12 font-mabry xl:mx-[85px]'>
            uMake is the first design app to bring on-device rendering to iOS devices. Create beautiful, rendered images of your creations with a tap of a button.
          </p>
        </div>

        <div className="flex-col bg-white rounded-[2.5rem] shadow-2xl shadow-black md:max-w-[460px] mx-10 transition-transform duration-500 ease-in-out transform opacity-0 translate-y-10 animate-slide-in">
          <img src={slides3} className='max-w-[200px] mx-auto relative bottom-[50px] h-auto block items-center justify-center' />
          <h1 className='mb-5 text-[24px] font-bold font-mabry'>Make your mark</h1>
          <p className='text-[18px] pb-12 font-mabry xl:mx-[85px]'>
            Capture your views. Write, draw, and mark up your slides with custom notes and sketches.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PinSlider;
