import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { ChevronRightIcon } from '@heroicons/react/20/solid'



function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [subMenuOpen1, setSubMenuOpen1] = useState(false);
  const [subMenuOpen2, setSubMenuOpen2] = useState(false);
  const [subMenuOpen3, setSubMenuOpen3] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);
      
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const toggleMenu = () => {
      setToggle(!toggle);
  };

  const toggleSubMenu1 = () => {
      setSubMenuOpen1(!subMenuOpen1);
  };

  const toggleSubMenu2 = () => {
      setSubMenuOpen2(!subMenuOpen2);
  };

  const toggleSubMenu3 = () => {
      setSubMenuOpen3(!subMenuOpen3);
  };

  return (
      <>
          <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
    <div className='flex w-full  xl:justify-evenly justify-between items-center xl:py-3 py-3 bg-white lg:bg-transparent transition-all'>

        <div className="cursor-pointer mx-3 lg:mx-5">
            <svg width="95" height="29" viewBox="0 0 94 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M44.297 11.8519V21.8646H41.6622V20.3917C41.1418 21.3847 40.1009 22.0798 38.6696 22.0798C36.5065 22.0798 34.9614 20.8551 34.9614 18.2071V11.8519H37.6125V17.5285C37.6125 18.9518 38.2305 19.7462 39.4178 19.7462C40.8328 19.7462 41.6622 18.687 41.6622 16.9989V11.8519H44.297ZM62.8218 16.8996C62.8218 13.7386 64.9199 11.6367 67.6034 11.6367C69.0509 11.6367 70.2219 12.2325 70.7587 13.2255V11.8519H73.4097V21.8646H70.8562V20.3917C70.1569 21.484 69.0672 22.0798 67.636 22.0798C64.8873 22.0798 62.8218 20.0276 62.8218 16.8996ZM70.8562 16.8996C70.8562 14.9964 69.5226 13.9703 68.1401 13.9703C66.7902 13.9703 65.4891 15.0295 65.4891 16.8996C65.4891 18.7367 66.7902 19.7793 68.1401 19.7793C69.5226 19.7793 70.8562 18.7698 70.8562 16.8996ZM84.453 21.8646H81.3954L78.6793 17.843L77.6546 18.9187V21.8481H75.0036V7.08545H77.6546V15.5756L80.9725 11.8519H84.2253L80.4033 15.9563L84.453 21.8646ZM91.7393 18.0416L94 18.9518C93.3332 20.8551 91.7718 22.0798 89.4136 22.0798C86.3884 22.0798 84.209 20.011 84.209 16.8003C84.209 13.9537 86.1607 11.6533 89.1045 11.6533C91.8206 11.6533 93.935 14.0696 93.6422 16.8003C93.6259 16.9989 93.5934 17.181 93.5446 17.3796H86.8601C86.9089 18.9684 88.1287 19.7628 89.4623 19.7628C90.7147 19.7628 91.4466 19.1008 91.7393 18.0416ZM86.8601 15.5756H91.0725C91.0725 15.5756 91.0888 15.526 91.0888 15.4929C91.0888 14.4833 90.2755 13.8213 89.0883 13.8213C88.0474 13.8213 87.1041 14.4502 86.8601 15.5756ZM59.1786 7.08545L53.9091 15.3274L48.6395 7.08545H46.2812V21.8812H49.0461V12.7787L53.4699 19.4318H54.3319L58.7558 12.7787V21.8812H61.5207V7.08545H59.1786Z" fill="black"/>
                <path d="M0 10.73C0 6.10249 0 3.78874 1.24622 2.20925C1.5288 1.8511 1.85267 1.5275 2.21113 1.24516C3.79194 0 6.10766 0 10.7391 0H18.2855C22.9169 0 25.2326 0 26.8134 1.24516C27.1719 1.5275 27.4958 1.8511 27.7783 2.20925C29.0246 3.78874 29.0246 6.10249 29.0246 10.73V18.27C29.0246 22.8975 29.0246 25.2113 27.7783 26.7907C27.4958 27.1489 27.1719 27.4725 26.8134 27.7548C25.2326 29 22.9169 29 18.2855 29H10.7391C6.10766 29 3.79194 29 2.21113 27.7548C1.85267 27.4725 1.5288 27.1489 1.24622 26.7907C0 25.2113 0 22.8975 0 18.27V10.73Z" fill="url(#paint0_linear)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8259 6.92644C15.7309 6.06958 16.9213 5.60205 18.3051 5.60205C19.4282 5.60205 20.4344 5.9077 21.268 6.49846C22.0933 7.08331 22.6704 7.89097 23.042 8.77806C23.7723 10.5213 23.7644 12.6823 23.2474 14.7024C22.8084 16.418 21.9478 18.1997 20.6775 19.6757C21.6159 19.9417 22.6682 19.8016 23.8441 18.9172L25.6292 21.2869C23.4236 22.9456 21.0781 23.1307 19.0046 22.2173C18.7219 22.0928 18.4476 21.9495 18.182 21.7895C16.8432 22.5836 15.2607 23.068 13.4402 23.068C9.35546 23.068 6.55249 20.6243 5.28385 17.3406C4.04002 14.1213 4.23536 10.0778 5.90886 6.46249L8.60308 7.70752C7.22571 10.6831 7.13245 13.8897 8.05309 16.2725C8.94892 18.5912 10.7635 20.1021 13.4402 20.1021C14.2868 20.1021 15.0721 19.943 15.7889 19.6575C15.269 19.0149 14.8148 18.3084 14.4321 17.5731C13.1692 15.1465 12.6841 12.3445 13.1774 10.0395C13.4265 8.87551 13.9441 7.76135 14.8259 6.92644ZM18.2361 17.9601C19.2615 16.8666 19.991 15.4548 20.3715 13.9677C20.7822 12.3627 20.7124 10.8987 20.3038 9.9232C20.1059 9.45091 19.8444 9.12577 19.5507 8.91765C19.2653 8.71544 18.8723 8.56796 18.3051 8.56796C17.6275 8.56796 17.1836 8.78012 16.8677 9.07924C16.5286 9.40032 16.2388 9.91844 16.0802 10.6597C15.758 12.165 16.0562 14.2649 17.0658 16.2048C17.4121 16.8704 17.8087 17.4605 18.2361 17.9601Z" fill="white"/>
                <defs>
                <linearGradient id="paint0_linear" x1="14.5123" y1="0" x2="14.5123" y2="29" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FE5714"/>
                <stop offset="1" stop-color="#E6361D"/>
                </linearGradient>
                </defs>
            </svg>
        </div>

        {/* Main Nav Items */}
        <div className="hidden lg:flex space-x-5 lg:mx-5 items-center cursor-pointer">

          <div className="relative group"> {/* Use 'group' for hover effects */}
            <div className="flex items-center ">
              <span className="flex text-[15px] font-graphik group-hover:text-red-600">uMake+
              <ChevronRightIcon  className="w-4 h-4 mt-1 transform group-hover:rotate-90 group-hover:text-red-500 transition-transform duration-200" />
              </span>
              </div>


            

            {/* Dropdown menu */}
            <div className="lg:absolute text-start -right-10 top-6  hidden w-40 font-graphik bg-white shadow-2xl rounded-xl group-hover:block"> {/* Show when hovered */}
              <Link to="" className="block py-2 mx-5 hover:text-red-500">Why uMake+</Link>
              <Link to="/" className="block py-2 mx-5 hover:text-red-500">Templates</Link>
              <Link to="/" className="block py-2 mx-5 hover:text-red-500">Elements</Link>
              <Link to="/" className="block py-2 mx-5 hover:text-red-500">Templates</Link>
              <Link to="/" className="block py-2 mx-5 hover:text-red-500">Textures</Link>
              <Link to="/" className="block py-2 mx-5 hover:text-red-500">Environments</Link>
            </div>
          </div>


          <div className="relative group"> {/* Use 'group' for hover effects */}
            <div className="flex items-center cursor-pointer">
              <span className="font-graphik text-black hover:text-red-500">Features</span>
              <ChevronRightIcon  className="w-4 h-4 mt-1 transform group-hover:rotate-90 group-hover:text-red-500 transition-transform duration-200" />
            </div>

            {/* Dropdown menu */}
            <div className="lg:absolute text-start -right-10 mt-22 hidden w-40 font-graphik bg-white shadow-2xl rounded-xl group-hover:block">
              <Link to="" className="block py-2 mx-5 graphik hover:text-red-500">Design</Link>
              <Link to="/" className="block py-2 mx-5 hover:text-red-500">Present</Link>
              <Link to="/" className="block py-2 mx-5 hover:text-red-500">Share & Publish</Link>

            </div>
          </div>

          <div className="relative group"> {/* Use 'group' for hover effects */}
            <div className="flex items-center cursor-pointer">
              <span className="text-[15px] font-graphik hover:text-red-600">Why uMake</span>
              <ChevronRightIcon  className="w-4 h-4 mt-1 transform group-hover:rotate-90 group-hover:text-red-500 transition-transform duration-200" />
            </div>

            {/* Dropdown menu */}
            <div className="lg:absolute text-start -right-28 top-6 hidden w-[290px] font-graphik bg-white shadow-2xl rounded-xl group-hover:block"> {/* Show when hovered */}
              <Link to="" className="block py-2  mx-5 hover:text-red-500">Architects & Interior Designers</Link>
              <Link to="/" className="block py-2 mx-5 hover:text-red-500">Graphic Designer & UX designers</Link>
              <Link to="/" className="block py-2 mx-5 hover:text-red-500">Business Owners</Link>
              <Link to="/" className="block py-2 mx-5 hover:text-red-500">Marketing & Sales</Link>
              <Link to="/" className="block py-2 mx-5 hover:text-red-500">Student & Teachers</Link>
              <Link to="/" className="block py-2 mx-5 hover:text-red-500">Environments</Link>
            </div>

          </div>
            <div className="text-[15px] font-graphik hover:text-red-600">Explore</div>
            <div className="text-[15px] font-graphik hover:text-red-600">Learn</div>
            <div className="text-[15px] font-graphik hover:text-red-600">Pricing</div>
          <div className=" bg-black text-white font-mabry text-[15px] px-4 py-[6.9px] rounded-lg ">Get Started</div>
        </div>




        {/* Mobile Menu Icon */}
        <div className="lg:hidden mx-2 flex-row space-y-2 w-8 h-4 cursor-pointer z-50 bg-white" onClick={toggleMenu}>
          <span className={`flex h-[.15rem] w-full bg-black transform transition-all duration-300 ease-in-out ${toggle ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
          <span className={`flex h-[.15rem] w-full bg-black transform transition-all duration-300 ease-in-out ${toggle ? '-rotate-45 -translate-y-[6px]' : ''}`}></span>
        </div>

        {/* Mobile Menu */}
        {toggle && (
          <div className="absolute w-full h-screen  overflow-hidden  top-[52px] left-0 flex-col bg-white text-start items-end space-y-6 py-[40px] z-10 lg:hidden">

            <div className="relative group w-fit mt-10 ">
            {/* Dropdown Trigger */}
            <div className="flex items-center cursor-pointer" onClick={toggleSubMenu1}>
              <div className="relative inline-flex mx-5 gap-x-2 w-auto text-[18px] md:text-[24px] font-graphik group-hover:text-red-600">
                uMake+
                <ChevronRightIcon
                  className={`w-5.5 h-5 md:mt-2.5 mt-1 transition-transform duration-200 ${subMenuOpen1 ? "" : ""}`} // Chevron rotation
                />
              </div>
            </div>

            {/* Dropdown Content with Slide Animation */}
            <div className={`overflow-hidden  transition-all duration-500 ease-in-out ${subMenuOpen1 ? "max-h-0" : "max-h-0"}`}
                style={{ maxHeight: subMenuOpen1 ? '300px' : '0' }}>
                
                <div className="flex flex-col text-start w-screen lg:hidden font-graphik text-[18px] text-gray-600">
                  <div className="space-y-5 mt-5 md:text-[24px]">                
                    <Link to="" className="block mx-10 hover:text-red-500">Why uMake+</Link>
                    <Link to="/" className="block mx-10 hover:text-red-500">Templates</Link>
                    <Link to="/" className="block mx-10 hover:text-red-500">Elements</Link>
                    <Link to="/" className="block mx-10 hover:text-red-500">Textures</Link>
                    <Link to="/" className="block mx-10 hover:text-red-500">Environments</Link>
              </div>
              </div>
            </div>
          </div>


            <div className="relative w-fit group ">
            {/* Dropdown Trigger */}
            <div className="flex items-center cursor-pointer" onClick={toggleSubMenu2}>
            <div className="relative inline-flex mx-5 gap-x-2 w-auto text-[18px] md:text-[24px] font-graphik group-hover:text-red-600">
                Features
                <ChevronRightIcon
                  className={`w-5 h-5 md:mt-2.5 mt-1 transition-transform duration-200 ${subMenuOpen1 ? "" : ""}`} // Chevron rotation
                />
              </div>
            </div>

            {/* Dropdown Content with Slide Animation */}
            <div className={`overflow-hidden  transition-all duration-500 ease-in-out ${subMenuOpen2 ? "max-h-0" : "max-h-0"}`}
                style={{ maxHeight: subMenuOpen2 ? '300px' : '0' }}>
                
              <div className="flex flex-col text-start w-screen lg:hidden font-graphik text-[18px] text-gray-600">
                <div className="space-y-5 mt-5 md:text-[24px]">
                <Link to="" className="block mx-10 hover:text-red-500">Design</Link>
                <Link to="/" className="block mx-10 hover:text-red-500">Present</Link>
                <Link to="/" className="block mx-10 hover:text-red-500">Share & Publish</Link>
                </div>
              </div>
            </div>
          </div>


          <div className="relative w-fit group">
            {/* Dropdown Trigger */}
            <div className="flex items-center cursor-pointer" onClick={toggleSubMenu3}>
            <div className="relative inline-flex mx-5 gap-x-2 w-auto text-[18px] md:text-[24px] font-graphik group-hover:text-red-600">
                Why uMake
                <ChevronRightIcon
                  className={`w-5 h-5 md:mt-2.5 mt-1 transition-transform duration-200 ${subMenuOpen1 ? "" : ""}`} // Chevron rotation
                />
              </div>
            </div>

            {/* Dropdown Content with Slide Animation */}
            <div className={`overflow-hidden  transition-all duration-500 ease-in-out ${subMenuOpen3 ? "max-h-0" : "max-h-0"}`}
                style={{ maxHeight: subMenuOpen3 ? '300px' : '0' }}>
                
                <div className="flex flex-col text-start w-screen lg:hidden ">
                <div className="space-y-5 mt-5  font-graphik text-[18px] md:text-[24px] text-gray-600">                
                  <Link to="" className="block mx-10 hover:text-red-500">Architects & Interior Designers</Link>
                <Link to="/" className="block mx-10 hover:text-red-500">Graphic Designer & UX designers</Link>
                <Link to="/" className="block mx-10 hover:text-red-500">Business Owners</Link>
                <Link to="/" className="block mx-10 hover:text-red-500">Marketing & Sales</Link>
                <Link to="/" className="block mx-10 hover:text-red-500">Student & Teachers</Link>
                <Link to="/" className="block mx-10 hover:text-red-500">Environments</Link>
              </div>
              </div>
            </div>
          </div>

            <div className="mx-5 text-[18px md:text-[24px] font-graphik hover:text-red-600 hover:cursor-pointer" onClick={toggleMenu}>Explore</div>
            <div className="mx-5 text-[18px] md:text-[24px] font-graphik hover:text-red-600 hover:cursor-pointer" onClick={toggleMenu}>Learn</div>
            <div className="mx-5 text-[18px] md:text-[24px] font-graphik hover:text-red-600 hover:cursor-pointer" onClick={toggleMenu}>Pricing</div>
            

            
            <div className="block mx-4 top-[525px] w-[95%]  text-center absolute bg-black text-white 
                            hover:cursor-pointer font-mabry text-[15px] p-3 rounded-lg">Get Started
                            </div>

          </div>

        )}

        </div>
        </div>
    </>
  );
}

export default Navbar;
