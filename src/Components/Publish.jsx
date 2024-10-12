import React from 'react'

import { ArrowLongRightIcon } from '@heroicons/react/20/solid';

import boxs from '../assets/box.png'
import dias from '../assets/dia.png'

import cirBlue from '../assets/circle-blue.png'
import cirPink from '../assets/circle-pink.png'






const Publish = () => {
  return (
    <div className='flex h-full w-full bg-[#3742ad] relative pb-28 '>

            <div className="flex-col justify-center text-center flex mt-32 mx-auto  ">
                    <span className="flex mx-5 md:block md:mx-auto text-white text-[24px] md:text-[32px] xl:text-[48px] font-mabry font-bold">
                    Share & Publish Anywhere
                    </span>

                    <div className="flex md:max-w-[680px]  mx-auto">
                        <span className="text-white my-5 md:m-6 m-[20px] text-[18px] text-start  font-graphik">
                    Now that you have a beautiful design, you can share and publish anywhere. Think photos, videos, social media, augmented reality or 3D file exports — a variety of options to fit your personal workflow                        </span>
                    </div>

                    <div className="mt-5 lg:mt-5 relative group text-white w-[150px] mx-auto">
                    <span className="font-bold hover:text-white  text-[16px] flex items-center  rounded-lg cursor-pointer border-[1px] py-3 px-2 border-white text-start justify-start font-mabry">Learn More
                    <ArrowLongRightIcon className="w-6 h-6 relative flex left-2.5 transform group-hover:ml-[1px] transition-transform duration-200" /></span>
                  </div>


                  <div className="lg:flex md:flex  justify-center mt-20 md:space-x-10 mx-4 ">
                    
                        <div className="block bg-white w-fit px-7 py-5 rounded-3xl ">
                        <svg width="59" height="54" viewBox="0 0 59 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.2075 51.2C26.4075 51.4 27.6075 51.5 28.8075 51.5C31.8075 51.5 34.7075 50.8 37.3075 49.6" stroke="#EE9EAB" stroke-width="3" stroke-miterlimit="10"/>
                            <path d="M43.2075 17.6C46.1075 20.6 48.1075 24.5 48.7075 28.8" stroke="#EE9EAB" stroke-width="3" stroke-miterlimit="10"/>
                            <path d="M14.5073 17.6C11.6073 20.6 9.60732 24.5 9.00732 28.8" stroke="#EE9EAB" stroke-width="3" stroke-miterlimit="10"/>
                            <path d="M28.8071 21C34.0538 21 38.3071 16.7467 38.3071 11.5C38.3071 6.25329 34.0538 2 28.8071 2C23.5604 2 19.3071 6.25329 19.3071 11.5C19.3071 16.7467 23.5604 21 28.8071 21Z" stroke="#EE9EAB" stroke-width="3" stroke-miterlimit="10"/>
                            <path d="M17.4544 32.0924L2 36.2332L6.1408 51.6876L21.5952 47.5468L17.4544 32.0924Z" stroke="#EE9EAB" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M39.1074 32.5L43.9074 50.3L56.9074 37.3L39.1074 32.5Z" stroke="#EE9EAB" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <h1 className=' flex mt-5 text-[24px] text-[#3742ad] font-mabry font-bold tracking-[1px]'>
                        Work in your flow
                        </h1>

                        <p className='lg:max-w-[500.90px] md:max-w-[550.90px]  text-start mt-5 text-[16px] text-[#3742ad] font-graphik'>
                        Export to file formats that allow you to work in other apps and software. uMake supports exporting to multiple file formats, including PNG, STL, IGES. You can continue your work in other apps such as Instagram, Facebook, Procreate, SketchUp, SolidWorks and more.
                        </p>
                        </div>


                        <div className="block bg-white w-fit px-7 py-5 rounded-3xl mt-10 md:mt-0 lg:mt-0">
                        <svg width="56" height="61" viewBox="0 0 56 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.8192 44.7834C36.0685 44.7834 42.756 38.0959 42.756 29.8465C42.756 21.5971 36.0685 14.9097 27.8192 14.9097C19.5698 14.9097 12.8823 21.5971 12.8823 29.8465C12.8823 38.0959 19.5698 44.7834 27.8192 44.7834Z" stroke="#EE9EAB" stroke-width="3" stroke-miterlimit="10"/>
                            <path d="M24.5119 2L4.13383 13.7361C2.85353 14.4829 2 15.8699 2 17.4703V40.6224" stroke="#EE9EAB" stroke-width="3" stroke-miterlimit="10" stroke-linejoin="round"/>
                            <path d="M31.2334 2L51.6115 13.7361C52.8918 14.4829 53.7453 15.8699 53.7453 17.4703V40.6224" stroke="#EE9EAB" stroke-width="3" stroke-miterlimit="10" stroke-linejoin="round"/>
                            <path d="M5.41406 46.7038L25.7922 58.4399C27.0725 59.1867 28.7795 59.1867 30.0598 58.4399L50.0112 46.9172" stroke="#EE9EAB" stroke-width="3" stroke-miterlimit="10" stroke-linejoin="round"/>
                            </svg>




                        <h1 className='flex mt-5 text-[24px] text-[#3742ad] font-mabry font-bold tracking-[1px]'>
                        Augment your design
                        </h1>

                        <p className='lg:max-w-[467.90px] md:max-w-[550.99px] text-start mt-5 text-[16px] text-[#3742ad] font-graphik'>
                        Want to see how your designs would look in the real world? View your designs in augmented reality (AR) right in uMake, or export them as USDz files and send them to anyone to view on their iOS device.                        </p>

                        </div>
                  </div>

                  <div className="flex  md:mx-auto justify-center mt-10 mx-4">
                        <div className="block bg-white w-fit px-7 py-10 rounded-3xl z-50 ">
                        <svg width="58" height="55" viewBox="0 0 58 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.1064 20.6705V6.41905C18.1064 3.98857 20.095 2 22.5255 2H40.5331C42.9636 2 44.9522 3.98857 44.9522 6.41905V11.3905" stroke="#EE9EAB" stroke-width="3" stroke-miterlimit="10" stroke-linejoin="round"/>
                            <path d="M4.51807 27.9619H17.7752V41.2191" stroke="#EE9EAB" stroke-width="3" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round"/>
                            <path d="M44.9524 33.4858C51.0539 33.4858 56 28.5396 56 22.4381C56 16.3367 51.0539 11.3905 44.9524 11.3905C38.851 11.3905 33.9048 16.3367 33.9048 22.4381C33.9048 28.5396 38.851 33.4858 44.9524 33.4858Z" stroke="#EE9EAB" stroke-width="3" stroke-miterlimit="10"/>
                            <path d="M16.118 29.9505L3.96561 42.1029C-0.232487 46.301 2.75038 53.3715 8.60562 53.3715H48.598" stroke="#EE9EAB" stroke-width="3" stroke-miterlimit="10" stroke-linejoin="round"/>
                            <path d="M44.9524 34.0381V36.8001C44.9524 39.2305 42.9638 41.2191 40.5333 41.2191H24.8457" stroke="#EE9EAB" stroke-width="3" stroke-miterlimit="10" stroke-linejoin="round"/>
                            </svg>


                        <h1 className='flex mt-5 text-[24px] text-[#3742ad] font-mabry font-bold tracking-[1px]'>
                        Share with others
                        </h1>

                        <p className='lg:max-w-[480.90px] md:max-w-[290.90px] text-start mt-5 text-[16px] text-[#3742ad] font-graphik'>
                        Using the Markup tools, you can collaborate with others on your design, make changes on the go, export your creations as photos or presentations, and let others know about your ideas.                        </p>
                        </div>

                        </div>

                          <div className="relative flex ">
                        <img src={boxs} alt="box" className='absolute w-[120px] lg:w-[184px] -top-[20px] left-[349px]  lg:-top-[285px]  lg:left-[810px]  z-50' />
                        <img src={cirBlue} alt="box" className='hidden lg:flex  absolute w-[80px] md:bottom-[255px] lg:left-[1020px] md:left-[750px] z-50' />
                        
                        <img src={cirPink} alt="box" className='absolute w-[52px]  md:bottom-[350px]  md:left-[860px] bottom-[980px] lg:left-[1080px] lg:bottom-[100px] left-[15px] -z-auto' />

                        <img src={cirPink} alt="box" className='hidden lg:flex absolute w-[106.59px] lg:bottom-[100px] lg:left-[225px] ' />
                        <img src={cirBlue} alt="box" className='hidden md:flex absolute max-w-[68.9px]  md:bottom-[290px] md:left-[50px] lg:left-[35px] lg:bottom-[220px]' />

                        <img src={dias} alt="box" className='absolute w-[48.81px] lg:bottom-[50px] lg:left-[0px] md:bottom-[1050px] md:left-[800px] bottom-[1290px] left-[400px] lg:right-[5px]' />
                        
                        </div>
        </div>

    </div>
  )
}

export default Publish
