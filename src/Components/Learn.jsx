import React from 'react'

import pinkImg from '../assets/pink.avif';
import blueImg from '../assets/blue.avif';
import lightBlueImg from '../assets/lightblue.avif';
import yellowImg from '../assets/yellow.avif';

import { ArrowLongRightIcon } from '@heroicons/react/20/solid';




const Learn = () => {
  return (
    <div className='bg-[#f8f8fe] flex text-center justify-center items-center max-w-full h-full mx-auto py-10 pb-32'>

        <div className="lg:flex-row md:flex flex flex-wrap-reverse   xl:space-x-20 lg:space-x-10  items-center md:flex-row-reverse ">

        <div className="lg:flex flex-row mx-auto lg:space-x-12 lg:space-y-24  lg:text-center text-start">
            
        <div className="flex-col  lg:flex  lg:space-y-16 text-start mt-10  lg:text-center">

            

        <div className=" flex lg:flex-col lg:rounded-3xl lg:shadow-2xl lg:shadow-blue-gray-800 lg:bg-white px-5 py-5 max-w-full  max-h-full"> 
                
                <img src={pinkImg} className='md:h-[180px] h-[100px] mx-auto ' alt="pink" />

                <div className="justify-center items-center mx-auto flex">
                    
                <h1 className='mx-auto font-mabry text-[22px]  font-bold justify-center items-center'>
                The Basics

                <p className='font-normal font-graphik text-[16px] xl:max-w-[250px] lg:w-[230px] md:w-[300px] max-w-[400px]  '>
                Learn about the initial stages of working in uMake. It's simple, fast, and efficient.

                </p>
                </h1>
                </div>
            </div>

            <div className=" flex lg:flex-col lg:rounded-3xl lg:shadow-2xl lg:shadow-blue-gray-800 lg:bg-white px-5 py-5 max-w-full  max-h-full"> 
                
                <img src={blueImg} className='md:h-[180px] h-[100px]  mx-auto ' alt="pink" />

                <div className="justify-center items-center mx-auto flex">
                    
                <h1 className='mx-auto font-mabry text-[22px]  font-bold justify-center items-center'>
                Help Videos

                <p className='font-normal font-graphik text-[16px] xl:max-w-[250px] lg:w-[230px] md:w-[300px] max-w-[400px]   '>
                Get training and improve your skills using fun and supportive help videos.
                </p>
                </h1>
                </div>
            </div>
            </div>

        <div className="flex-col flex lg:space-y-16">

        <div className=" flex lg:flex-col lg:rounded-3xl lg:shadow-2xl lg:shadow-blue-gray-800 lg:bg-white px-5 py-5 max-w-full  max-h-full"> 
                
                <img src={lightBlueImg} className='md:h-[180px] h-[100px] mx-auto ' alt="pink" />

                <div className="justify-center items-center mx-auto flex">
                    
                <h1 className='mx-auto font-mabry text-[22px]  font-bold justify-center items-center'>
                How To

                <p className='font-normal font-graphik text-[16px] xl:max-w-[250px] lg:w-[230px] md:w-[310px] max-w-[400px]   '>
                Learn how to design while mastering uMake with these minutes-long tutorials.
                </p>
                </h1>
                </div>
            </div>

            <div className=" flex lg:flex-col lg:rounded-3xl lg:shadow-2xl lg:shadow-blue-gray-800 lg:bg-white px-5 py-5 max-w-full  max-h-full"> 
                
                <img src={yellowImg} className='md:h-[180px] h-[100px] mx-auto ' alt="pink" />

                <div className="justify-center items-center mx-auto flex">
                    
                <h1 className='mx-auto font-mabry text-[22px]  font-bold justify-center items-center'>
                Tips and Tricks

                <p className='font-normal font-graphik text-[16px] xl:max-w-[250px] lg:w-[230px] md:w-[310px] max-w-[400px]   '>
                We've developed our own tips and tricks over years of experience.  Here's where we share them!
                </p>
                </h1>
                </div>
            </div>
            </div>
            </div>

            <div className="flex-col flex text-start space-y-5 md:max-w-full   md:mx-auto mx-5">
                <h1 className='md:text-[48px] text-[32px] font-mabry font-bold '>
                Learn Design
                </h1>
                <p className='xl:max-w-[370px] lg:max-w-[300px] md:max-w-[410px]  md:text-[19px] text-[17px] font-grapik'>
                uMake offers hundreds of videos to help you learn design in no time. Easily search for a specific topic or watch our short and to-the-point help videos.
                </p>

                <div className="mt-5 lg:mt-5 relative group text-black w-[155px]">
                    <span className=" hover:black-white text-[18px] flex items-center  rounded-lg cursor-pointer border-[1px] py-3 px-2 border-black text-start justify-start font-mabry">Learn More
                    <ArrowLongRightIcon className="w-6 h-6 relative flex left-1.5 transform group-hover:ml-[1px] transition-transform duration-200" /></span>
                  </div>
            </div>
            </div>
      
    </div>
  )
}

export default Learn
