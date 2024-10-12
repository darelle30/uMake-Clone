import React from 'react'

const Hero = () => {
  return (
    <>
          <div className="max-w-full  h-[100vh] flex mt-24 text-center mx-auto">
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

    </>
  )
}

export default Hero
