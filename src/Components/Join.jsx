import React from 'react'

import JoinImg from '../assets/joinU.avif'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid';


const Join = () => {
  return (
    <div className='color1 md:flex max-w-full justify-center items-center lg:space-x-10  mx-auto py-10'>
        
        <div className="md:hidden text-white ">
        <p className='text-[48px] font-bold font-mabry text-start mx-5  '>
          Join Umake+
        </p>
        <p className="mt-10 mx-5 text-[17px] text-white font-graphik text-start ">
        uMake+ is an all-in-one app where you can easily find everything you need - from Mobile and AR-friendly 3D models to materials, textures, shapes & colors. New content is added weekly.        </p>

        <div className="mx-5 lg:mx-0 mt-5 lg:mt-10 relative group text-blawhiteck max-w-[140px]">
          <span className="font-bold  text-[15px] flex items-center rounded-lg cursor-pointer border-[1px] py-3 px-2 border-white text-start justify-start font-mabry">
            Learn More
            <ArrowLongRightIcon className="w-4 h-4 relative flex left-2.5 transform group-hover:ml-[1px] transition-transform duration-200" />
          </span>
        </div>
      </div>


        <div className="flex max-w-full mx-auto mt-10 md:mt-0 justify-center ">
            <img src={JoinImg} alt="img" className='flex relative lg:max-w-[550px] md:max-w-[400px] max-w-[350px]  ' />
        </div>


        <div className="hidden md:flex flex-col max-w-full mx-auto text-white mb-10">
        <p className=' text-[48px] font-bold font-mabry text-start  '>
          Join Umake+
        </p>
        <p className="mt-10 lg:text-[18px] text-[16.5px] text-white font-graphik text-start lg:max-w-[440px] md:max-w-[400px] ">
        uMake+ is an all-in-one app where you can easily find everything you need - from Mobile and AR-friendly 3D models to materials, textures, shapes & colors. New content is added weekly.        </p>

        <div className="mx-5lg:mx-0 mt-5 lg:mt-10 relative group text-blawhiteck max-w-[150px]">
          <span className="  text-[18px] flex items-center rounded-lg cursor-pointer border-[1px] py-3 px-2 border-white text-start justify-start font-mabry">
            Learn More
            <ArrowLongRightIcon className="w-5 h-5 relative flex left-2.5 transform group-hover:ml-[1px] transition-transform duration-200" />
          </span>
        </div>
      </div>
      
    </div>
  )
}

export default Join
