import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Cards from '../Components/PinSlider';
import SharePub from '../Components/Publish';
import JoinU from '../Components/Join';
import Discover from '../Components/Discover';
import Loop from '../Components/LoopTxt';
import DesNIns from '../Components/DesNIns';
import Learn from '../Components/Learn';
import Designs from '../Components/Designs';



import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import videoSrc from '../assets/umake_hp_hero.mp4';
import videoSrc1 from '../assets/hp_umakeplus.mp4';






import img4 from '../assets/phone.avif';
import imgs1 from '../assets/1.avif';
import imgs2 from '../assets/2.avif';
import imgs3 from '../assets/3.avif';
import imgbox1 from '../assets/img1.avif';
import imgbox2 from '../assets/img2.avif';
import imgbox3 from '../assets/img3.avif';
import imgbox4 from '../assets/img4.avif';



import { ArrowLongRightIcon } from '@heroicons/react/20/solid';

const Home = () => {
  

  return (
    <>
      <div className="lg:flex  h-full w-full  justify-center items-center text-center pt-10">
        
        <div className="flex-col justify-center flex mt-32">
          
          <div className="flex-col flex mx-auto leading-none text-center items-center">
          <span className="text-[32px] md:text-[48px] lg:text-[60px] xl:text-[80px] font-mabry font-bold ">
            Design in 3D.

          <span className=" text-[32px] md:text-[48px] flex lg:text-[60px] xl:text-[80px] font-mabry font-bold">
            Publish Anywhere.
          </span>
          </span>

          
          <div className="flex md:w-[750px] w-[495px] leading-normal mx-auto mt-5 ">
            <span className="bg-white my-5 m-6 text-[18px] md:text-[22px] lg:text-[22px] xl:text-[22px] font-graphik">
              Create beautiful designs — photos, presentations, or 3D models — using a library of content and easy-to-use tools in uMake app for iPhone, iPad and Mac (Apple Silicon).
            </span>
          </div>

          {/* Button Container */}
          <div className="mt-5 bg-black py-5 rounded-lg  px-10 max-w-full  cursor-pointer">
            <p className="text-white font-mabry text-[20px]">Get Started</p>
          </div>


          {/* Watch Video Section */}
          <div className="flex text-center mx-auto relative mt-8 text-[16px] font-mabry group cursor-pointer font-bold">
            Watch Video
            <svg className="mx-auto relative top-1 left-3 group-hover:left-5 duration-300" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.12663 0.220494C1.22507 -0.296655 0.494141 0.126999 0.494141 1.166V8.83334C0.494141 9.87337 1.22507 10.2965 2.12663 9.77981L8.82827 5.93647C9.73014 5.41914 9.73014 4.58099 8.82827 4.06378L2.12663 0.220494Z" fill="#3B89F7" />
            </svg>
            </div>

            <video className="mt-5 flex h-full  md:max-w-[80%] mx-auto rounded-lg items-center" loop muted autoPlay>
              <source src={videoSrc} type="video/mp4" />
            </video>
          </div>

          {/* Logos Section */}
          <div className="mt-8 mx-auto sm:inline-flex justify-center items-center overflow-hidden transition-all">
            <img src={imgs1} className="h-[108px] mx-auto" alt="Logo 1" />
            <img src={imgs2} className="h-[108px] mx-auto xl:mx-20" alt="Logo 2" />
            <img src={imgs3} className="h-[108px] mx-auto" alt="Logo 3" />
          </div>

          {/* 3D Design Section */}
          <div className="w-full mt-24 text-center mx-auto">
            <span className="text-[24px] md:text-[48px] font-mabry font-bold">3D Design. Easier Than Ever.</span>
            <div className="mt-4 max-w-[750px] mx-auto">
              <p className="bg-white my-5 md:mx-10 m-7 text-[18px] font-graphik text-center">
                Design quickly with a touch of a button. Choose from a rich library of templates, elements, textures: from furniture to graphic design assets.
              </p>
            </div>

            {/* Video and Phone Image */}
            <div className="lg:flex lg:flex-row lg:justify-center items-start text-center lg:space-x-28 mt-10 p-5">
              <div className="inline-flex relative -ml-1 mx-10 border-black dark:border-black bg-black border-[9px] rounded-[1.3rem] sm:max-w-[550px]">
                <div className="rounded-[.9rem] overflow-hidden h-full w-full bg-white dark:bg-gray-800">
                  <video src={videoSrc1} className="dark:hidden h-full w-full" alt="" loop muted autoPlay />
                </div>
                <div className="absolute right-[-50px] bottom-[-9px] md:right-[-100px] md:bottom-[-10px] lg:right-[-110px] lg:bottom-[-10px]">
                  <img src={img4} className="z-50 w-[89px] h-auto sm:w-[100px] md:w-[150px]" alt="Phone Image" />
                </div>
                </div>



              {/* Text Section */}
              <div className="flex-row mx-auto mt-10 lg:mt-0 lg:justify-start xl:justify-start text-start sm:max-w-[550px] md:max-w-[550px] lg:max-w-[350px]">
                <p className="text-[18px] font-graphik">
                  uMake gives you complete freedom to transform your imagination into a reality. You can create anything from a simple 3D object to an entire 3D scene. Start from a template or quickly drag & drop 3D elements, textures, HDR environments, fonts, photos, etc. into your canvas.
                </p>
                <div className="mt-10 relative group">
                  <div className="flex items-center rounded-lg cursor-pointer border-[1px] py-3 px-10 border-black w-[170px] lg:w-[50%]">
                    <span className="font-bold hover:text-black mr-2 text-[16px] font-mabry">View All</span>
                    <ArrowLongRightIcon className="w-5 h-5 transform group-hover:ml-[1px] transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </div>

      </div>


      <div className="block  items-center justify-center xl:max-w-screen-lg lg:max-w-screen-lg sm:max-w-screen-sm w-full h-full mx-auto mt-10">
        <h2 className="mx-5 lg:mx-auto text-[24px] md:text-[48px] font-bold text-start">Discover uMake+</h2>

                <Swiper
          spaceBetween={10} // Set this to 0 to remove the gap between the slides
          slidesPerView={4} // Default to show 4 slides on large screens
          slidesPerGroup={1}
          loop={false} // Keep the loop disabled
          modules={[Navigation, Pagination]}
          breakpoints={{
            320: { slidesPerView: 1.50, spaceBetween: 5 },  // For small screens, show 1.5 slides with some space    // For medium screens, show 2 slides
            640: { slidesPerView: 3, spaceBetween: 10 },    // For medium-large screens, show 3 slides
            768: { slidesPerView: 3, spaceBetween: 10 },    // For medium-large screens, show 3 slides
            1024: { slidesPerView: 3, spaceBetween: 10  },     // For large screens, show 4 slides
          }}
          className="flex mx-5 lg:mx-0 sm:mx-5 mb-20 w-full"
        >
          <SwiperSlide className="mx-auto w-[300px] items-center " >
            <img src={imgbox1} alt="Templates" className="w-full h-full" />
            <p className="mt-2 text-center text-[16px] md:text-[20px] lg:text-[24px] font-bold font-mabry">Templates</p>
          </SwiperSlide>
          <SwiperSlide className="mx-auto w-[300px] items-center mr-10" >
            <img src={imgbox2} alt="Elements" className="w-full h-full" />
            <p className="mt-2 text-center text-[16px] md:text-[20px] lg:text-[24px] font-bold font-mabry">Elements</p>
          </SwiperSlide>
          <SwiperSlide className="mx-auto w-[300px] items-center mr-10" >
            <img src={imgbox3} alt="Textures" className="w-full h-full" />
            <p className="mt-2 text-center text-[16px] md:text-[20px] lg:text-[24px] font-bold font-mabry">Textures</p>
          </SwiperSlide>
          <SwiperSlide className="mx-auto w-[300px] items-center mr-10" >
            <img src={imgbox4} alt="Environments" className="w-fulll h-full" />
            <p className="mt-2 text-center text-[16px] md:text-[20px] lg:text-[24px] font-bold font-mabry">Environments</p>
          </SwiperSlide>
        </Swiper>
      </div>

      
      </div>

      </div>



            <Designs/>
            <Cards/>
            <SharePub/>
            <JoinU/>
            <Discover/>
            <Loop/>
            <DesNIns/>
            <Learn/>



    </>
  );
};

export default Home;