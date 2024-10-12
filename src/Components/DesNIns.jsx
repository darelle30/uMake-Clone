import React from 'react'

import Evi1Img from '../assets/Evi1.avif'
import Evi2Img from '../assets/Evi2.avif'
import Evi3Img from '../assets/Evi3.avif'

import { ArrowLongRightIcon } from '@heroicons/react/20/solid';



const DesNIns = () => {
  return (
        <div className='h-full flex-col flex justify-center items-center max-w-full mt-10 pb-32'>
      
        <div className="flex items-center justify-center w-full mx-auto  xl:space-x-[550px] lg:space-x-[400px] space-x-[70px] sm:space-x-[220px] md:space-x-[150px] ">

        <p className=' md:text-[48px] text-[28px] text-start  font-mabry font-bold  '>
        Design and Inspiration </p>

        <div className=" group  text-black w-[115px]">
                    <span className=" flex hover:text-black text-[17px]  items-center  rounded-lg cursor-pointer border-[1px] py-3 px-3 border-black text-start justify-start font-mabry">View All
                    <ArrowLongRightIcon className="w-5 h-5 relative flex left-1.5 transform group-hover:ml-[1px] transition-transform duration-200" /></span>
                  </div>
        </div>

        
        <div className=" md:flex items-center justify-center w-full text-start mx-auto mt-10 cursor-pointer">

          <div className="md:mb-5 lg:mt-7 flex-col max-w-full px-5 py-5 rounded-3xl shadow-2xl md:shadow-none hover:shadow-2xl hover:bg-white mx-5 md:mx-0">

          <img src={Evi1Img} className='w-full max-h-[300px] sm:w-[700px] sm:max-h-[210px]  lg:w-[360px] lg:max-h-[250px] rounded-2xl object-cover '/>

            <div className="mt-5 mx-auto">

            <h1 className=' text-[18px] font-mabry font-bold md:max-w-[290px]'>
            The experience economy. The new frontier.
    
            <span className='block text-[18px] font-mabry font-bold '>
              Evi Meyer

            </span></h1>
            </div>

            </div>



            <div className="mt-5 sm:mt-0 sm:mb-5 flex-col max-w-full px-5 py-5 rounded-3xl shadow-2xl md:shadow-none  md:hover:shadow-2xl md:hover:bg-white mx-5 md:mx-0">

          <img src={Evi2Img} className='w-full max-h-[300px] sm:w-[700px] sm:max-h-[210px]  lg:w-[360px] lg:max-h-[250px] rounded-2xl object-cover '/>

                <div className="mt-5">

                <h1 className=' text-[18px] font-mabry font-bold'>
                Apps 3.0 — Apps Are Here to Stay


                <span className='block text-[18px] font-mabry font-bold  '>
                    Evi Meyer

                </span></h1>
                </div>

                </div>


            <div className="mt-5 md:mt-0 flex-col max-w-full mx-5 md:mx-0  px-5 py-5 rounded-3xl shadow-2xl md:shadow-none  md:hover:shadow-2xl md:hover:bg-white ">

            <img src={Evi3Img} className='w-full max-h-[300px] sm:w-[700px] sm:max-h-[210px]  lg:w-[360px] lg:max-h-[250px] rounded-2xl object-cover '/>

                    <div className=" mt-5">

                    <h1 className=' text-[18px] font-mabry font-bold max-w-[350px]'>
                    ARx Designers — The Future Kings and Queens of Silicon Valley           
                    <span className='block text-[18px] font-mabry font-bold '>
                        Evi Meyer

                    </span></h1>
                    </div>

                    </div>     

          </div>


          </div>

  )
}

export default DesNIns
