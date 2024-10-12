import React from 'react'

import TempImg from '../assets/big-temps.avif'
import ElemsImg from '../assets/big-elems.avif'
import TextsImg from '../assets/big-texts.avif'
import EnviImg from '../assets/big-envi.avif'


const Discover = () => {
  return (
    <div className='h-full flex justify-center items-center max-w-full mx-auto bg-[#f8f8fe] pb-32 '>
      
      <div className="mx-auto max-w-full max-h-full cursor-pointer mt-32 ">

        <p className=' mx-5 md:text-[48px] text-[28px]  font-mabry font-bold text-start '>
          Discover uMake+
        </p>


        <div className="flex-row md:flex mx-auto  text-start md:mt-10 mt-5 ">

          <div className="flex-col max-w-full mx-4 md:mx-0 flex px-5 py-5 rounded-3xl hover:bg-white ">

          <img src={TempImg} className=' w-[750px] md:w-[450px] lg:w-[510px] h-[210px] md:h-[250px]  lg:h-[350px] rounded-2xl object-cover '/>

            <div className=" mt-5">

            <h1 className=' text-[32px] font-mabry font-bold'>
              Templates
    
            <span className='ml-5 text-[17px] font-mabry font-bold text-[#878d94]'>
              249 items

            </span></h1>
            </div>
          </div>

          <div className="flex-col max-w-full mx-4 md:mx-0 px-5 py-5 rounded-3xl hover:bg-white ">

          <img src={ElemsImg} className=' w-[750px] md:w-[450px] lg:w-[510px] h-[210px] md:h-[250px]  lg:h-[350px] rounded-2xl object-cover '/>

            <div className=" mt-5">

            <h1 className=' text-[32px] font-mabry font-bold'>
              Elements
    
            <span className='ml-5 text-[17px] font-mabry font-bold text-[#878d94]'>
              1543 items

            </span></h1>
            </div>
          </div>

        </div>

        <div className="flex-row md:flex mx-auto  text-start  ">

<div className="flex-col max-w-full px-5 py-5 mx-4 md:mx-0 rounded-3xl hover:bg-white ">

<img src={TextsImg} className=' w-[750px] md:w-[450px] lg:w-[510px] h-[210px] md:h-[250px]  lg:h-[350px] rounded-2xl object-cover '/>

  <div className=" mt-5">

  <h1 className=' text-[32px] font-mabry font-bold'>
    Textures

  <span className='ml-5 text-[17px] font-mabry font-bold text-[#878d94]'>
    720 items

  </span></h1>
  </div>
</div>

<div className="flex-col max-w-full h-full  md:mx-0 px-5 py-5 rounded-3xl hover:bg-white ">

<img src={EnviImg} className=' w-[750px] md:w-[450px] lg:w-[510px] h-[210px] md:h-[250px]  lg:h-[350px] rounded-2xl object-cover '/>

  <div className="mt-5 mx-auto">

  <h1 className=' text-[32px] font-mabry font-bold'>
    Environments

  <span className='ml-5 text-[17px] font-graphik  text-[#878d94]'>
    28 items

  </span></h1>
  </div>
</div>
</div>
      </div>
    </div>
  )
}

export default Discover
