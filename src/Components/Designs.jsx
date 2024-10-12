import React, { useState, useEffect } from 'react';

import videoSrc1 from '../assets/hp_design_min.mp4';
import videoSrc2 from '../assets/hp_precise_min.mp4';
import videoSrc3 from '../assets/hp_creativity_min.mp4';

import { ArrowLongRightIcon } from '@heroicons/react/20/solid';


const Designs = () => {

    const [bgColor, setBgColor] = useState('#3742ad'); // Initial background color

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Get scroll position
      const screenWidth = window.innerWidth;
  
      // Get the offsets and heights of your sections
      const section1 = document.querySelector('#section1');
      const section2 = document.querySelector('#section2');
      const section3 = document.querySelector('#section3');
      
      const section1Top = section1?.offsetTop || 0;
      const section2Top = section2?.offsetTop || 0;
      const section3Top = section3?.offsetTop || 0;
      const section2Height = section2?.offsetHeight || 0;
      const section3Height = section3?.offsetHeight || 0;
      

        // Update the scroll logic so each section triggers the right background color
        if (scrollTop >= section1Top && scrollTop < section2Top) {
          setBgColor('#3742ad'); // Background color for Design 1
        } else if (scrollTop >= section2Top && scrollTop < section3Top) {
          setBgColor('#17b3bd'); // Background color for Design 2
        } else if (scrollTop >= section3Top && scrollTop < (section3Top + section3Height)) {
          setBgColor('#3b89f7'); // Background color for Design 3
        }
      
    };


    
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);


      
    };
  }, []);

  return (
    <>
          {/* 3D Design Section  DESIGN 1*/} 
          <div className="flex-col flex w-full text-center justify-center h-full mx-auto ">

          <div id="section1" className="pt-32 md:pb-32 pb-10 "style={{ backgroundColor: bgColor }}>
            
            <span className=" text-[24px] md:text-[48px] font-mabry text-white font-bold ">All the tools you need, on the go
            </span>
            <div className="mt-4 md:max-w-[700px] max-w-[520px] mx-auto">
              <p className="text-white my-5 md:mx-10  text-[18px] font-graphik text-center  ">
              Designing in 3D is now easier than ever. Drag and drop from the content library, or draw precisely using the precision tool. Everything you need is within reach.              </p>
            </div>

            {/* Video and Phone Image */}
            <div className="pt-20 lg:flex lg:flex-row lg:justify-center items-start text-center lg:space-x-12  p-5 max-w-full">
              <div className="inline-flex relative  border-white dark:border-white bg-white border-[9px] rounded-[1.3rem] sm:max-w-[590px]">
                <div className="rounded-[.9rem] overflow-hidden h-full w-full bg-white dark:bg-gray-800">
                  <video src={videoSrc1} className="dark:hidden h-full w-full" alt="" loop muted autoPlay />
                </div>
                </div>

                <div className="flex-col inline-flex items-start">
                    <span className='hidden lg:inline-flex relative font-mabry text-white bg-[#ee9eab] rounded-lg text-[24px] py-2 px-5 lg:left-[100px]  z-50'>
                      Designing
                    </span>

                    <span className='hidden lg:inline-flex font-mabry lg:text-[#3742ad] text-white relative lg:bg-[#fede89] rounded-lg lg:text-[40px] text-[25px] py-1 px-3 lg:right-[90px] lg:bottom-[11px] '>
                      Easy & Simple
                    </span>

                    <div id="section2" className="" style={{ backgroundColor: bgColor}}>


              {/* Text Section */}
              <div className="block  mt-5 lg:ml-10  lg:justify-start xl:justify-start text-start sm:max-w-[550px] md:max-w-[550px] lg:max-w-[310px] ">
              <span className='lg:hidden block text-white pb-5 text-[24px]'>Easy & Simple </span>
                <p className="text-[15px] text-white font-graphik ">
                              Create 3D text in seconds, or drag & drop shapes and objects from our vast content library. Already got something? It's a cinch to import file types like SketchUp or OBJ.
                              Rather draw it yourself? Use the freestyle tool to sketch and doodle rapidly in 3D. Let your ideas flow!</p>
                
                
                    <div className="mt-5 lg:mt-5 relative group text-white max-w-[140px]">
                    <span className="font-bold hover:text-white text-[14px] flex items-center  rounded-lg cursor-pointer border-[1px] py-3 px-2 border-white text-start justify-start font-mabry">Learn More
                    <ArrowLongRightIcon className="w-4 h-4 relative flex left-2.5 transform group-hover:ml-[1px] transition-transform duration-200" /></span>
                  </div>
              </div>
            </div>
            </div>
            </div>
            </div>




          {/* 3D Design Section  DESIGN 2*/} 

            {/* Video and Phone Image */}
            <div className="pb-5 md:pb-32" style={{ backgroundColor: bgColor}}>

            <div className="lg:flex lg:flex-row lg:justify-center items-start text-center lg:space-x-12  p-5 h-full">
              <div className="inline-flex relative  border-white dark:border-white bg-white border-[9px] rounded-[1.3rem] sm:max-w-[590px]">
                <div className="rounded-[.9rem] overflow-hidden h-full w-full bg-white dark:bg-gray-800">
                  <video src={videoSrc2} className="dark:hidden h-full w-full" alt="" loop muted autoPlay />
                </div>
                </div>

                <div className="flex-col inline-flex items-start">
                    <span className='hidden lg:inline-flex relative font-mabry  text-[#3742ad] bg-[#fede89] rounded-lg text-[24px] py-2 px-5 lg:left-[110px]  z-50'>
                      3D Modeling
                    </span>


                    <span className='hidden lg:inline-flex font-mabry text-white relative lg:bg-[#ee9eab] rounded-lg lg:text-[38px] text-[25px] py-1 px-4 lg:right-[90px] lg:bottom-[11px] '>
                      Precise & Powerful
                    </span>

                        <div id="section3" className="" style={{ backgroundColor: bgColor}}>



              {/* Text Section */}
              <div className="block mx-auto mt-5 lg:ml-10  lg:justify-start xl:justify-start text-start sm:max-w-[550px] md:max-w-[550px] lg:max-w-[310px] ">
              <span className='lg:hidden block text-white pb-5 text-[24px]'
              >Precise & Powerful 
              </span>
              

                <p className="lg:text-[15px] text-[16.5px] text-white font-graphik ">
                              When precision matters, uMake puts you in control. Draw perfect lines, arcs, and angles, and specify exact dimensions. Push and pull extrusions or cutouts. Chamfer and fillet corners, and loft or revolve curves to create complex 3D surfaces.
                              With intuitive inputs and powerful features, it's easy to model the shapes you envision.</p>

                
                              <div  className="mt-5 lg:mt-5 relative group text-white max-w-[140px]">
                    <span className="font-bold hover:text-white text-[14px] flex items-center  rounded-lg cursor-pointer border-[1px] py-3 px-2 border-white text-start justify-start font-mabry">Learn More
                    <ArrowLongRightIcon className="w-4 h-4 relative flex left-2.5 transform group-hover:ml-[1px] transition-transform duration-200" /></span>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>



          {/* 3D Design Section  DESIGN 3*/} 

            {/* Video and Phone Image */}
            <div className="pb-32" style={{ backgroundColor: bgColor }}>


            <div className="lg:flex lg:flex-row lg:justify-center items-start text-center lg:space-x-12 p-5 w-full">
              <div className="inline-flex relative  border-white dark:border-white bg-white border-[9px] rounded-[1.3rem] sm:max-w-[590px]">
                <div className="rounded-[.9rem] overflow-hidden h-full w-full bg-white dark:bg-gray-800">
                  <video src={videoSrc3} className="dark:hidden h-full w-full" alt="" loop muted autoPlay />
                </div>

                </div>
                <div className="flex-col inline-flex items-start">
                    <span className='hidden lg:inline-flex relative font-mabry  text-[#3742ad] bg-[#fede89] rounded-lg text-[24px] py-2 px-5 lg:left-[70px]  z-50'>
                      Exploring
                    </span>

                    <span className='hidden lg:inline-flex font-mabry text-white relative lg:bg-[#3742ad] rounded-lg lg:text-[38px] text-[25px] py-1 px-4 lg:right-[90px] lg:bottom-[11px] '>
                    Infinite Creativity
                    </span>

              {/* Text Section */}
              <div className="block mx-auto mt-5 lg:ml-10  lg:justify-start xl:justify-start text-start sm:max-w-[550px] md:max-w-[550px] lg:max-w-[310px] ">
              <span className='lg:hidden block text-white pb-5 text-[24px]'>Precise & Powerful </span>
                <p className="lg:text-[15px] text-[16.5px] text-white font-graphik ">
                              When you're brainstorming, iterating, or problem-solving, freedom to explore possibilities is key. Stay organized with layers. Try different looks with drag-and-drop textures and materials.
                              Compare and share ideas instantly with fast renders, annotated slides, and saved views!</p>
                
                
                <div className="mt-5 lg:mt-5 relative group text-white max-w-[140px]">
                    <span className="font-bold hover:text-white text-[14px] flex items-center  rounded-lg cursor-pointer border-[1px] py-3 px-2 border-white text-start justify-start font-mabry">Learn More
                    <ArrowLongRightIcon className="w-4 h-4 relative flex left-2.5 transform group-hover:ml-[1px] transition-transform duration-200" /></span>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
    </>
  )
}

export default Designs
