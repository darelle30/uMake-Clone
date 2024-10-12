import React from 'react';
import img1 from '../assets/footer_tri.avif'; // Update the paths to your images
import img2 from '../assets/footer_blue.png';
import img3 from '../assets/footer_square.png';

function Footer() {
    return (
        <footer className="flex-col xl:w-[1100px] lg:w-[1000px] md:w-[750px] sm:w-[650px] mx-auto  bg-white mt-24">
            {/* Main Call-to-Action Section */}
            <div className="relative bg-[#3742ad] text-white py-16 rounded-3xl   flex-col items-center justify-center lg:text-start text-center md:mx-0 mx-5">
                
                <h1 className="mx-16 md:text-[48px] text-[32px] font-bold  font-mabry">Design in 3D.</h1>
                <h2 className=" mx-16  md:text-[48px] text-[32px] font-bold mb-6 font-mabry">Publish Anywhere.</h2>

                <button className="mx-16  font-graphik bg-white text-[#2D46B9]  py-5 px-5 rounded-lg  text-[20px]">
                    Download uMake
                </button>

                {/* Decorative 3D shapes */}
                <div className="absolute lg:top-0 -bottom-[100px] right-[110px] lg:right-32 transform translate-x-12 -translate-y-16">
                    <img src={img1} alt="3D triangle" className="md:w-[200px] w-[90px]" />
                </div>
                <div className="absolute right-[10px] bottom-[50px] lg:bottom-[150px] lg:right-[350px] md:bottom-[290px] md:right-10">
                    <img src={img2} alt="Blue circle" className="lg:w-[100px] md:w-[70px] w-[40px]" />
                </div>
                <div className="absolute -bottom-[5px] left-0 md:-left-[50px] md:-bottom-[50px]  transform lg:translate-x-[890px] lg:translate-y-5">
                    <img src={img3} alt="Red cube" className="md:w-[200px] w-[100px]" />
                </div>
            </div>

            {/* Footer Links Section */}
            <div className=" lg:flex  justify-center mx-auto lg:space-x-10  lg:mb-24 lg:border-t pt-16 lg:mt-24   ">
                
                <div className="text-gray-700 lg:flex-col  mx-5 lg:mx-0 border-t lg:border-none ">

                    <div className="lg:flex-col flex mt-12 lg:mt-0 space-x-11 sm:space-x-56 md:space-x-80 lg:space-x-0 lg:items-start items-center">
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

                        <select className=" flex  lg:mt-10 text-black cursor-pointer border-gray-500 rounded-lg py-2 px-4 w-[300px] border-[2px]">

                            <option>English</option>
                            <option>Chinese</option>

                            {/* Add other languages */}
                        </select>
                        </div>

                        <div className="hidden  lg:flex  mt-8  space-x-3  text-black  ">
                            <a href="/privacy-policy" className="cursor-pointer font-grapik text-[15px] hover:text-red-400">Privacy Policy</a>
                            <a> | </a>
                            <a href="/terms-of-use" className="cursor-pointer font-grapik text-[15px] hover:text-red-400">Terms of Use</a>
                        </div>

                        <p className="hidden lg:flex text-[14px] font-grapik mt-5">                
                            © 2024 uMake, Inc. All rights reserved
                        </p>
                        </div>
 


                   <div className="mx-5 md:flex lg:flex grid mt-10 lg:mt-0 grid-cols-2 md:grid-cols-6 leading-[32px] lg:space-x-5 gap-y-10 xl:space-x-14 lg:gap-0 gap-x-24 md:gap-x-10  text-nowrap justify-center text-start ">

                   <div>
                        <h4 className="font-semibold mb-4 font-graphik text-[15px] text-[#959eaa]">Product</h4>
                        <ul className="space-y-2 text-[15px] font-graphik">
                            <li><a href="/umake" className="hover:underline">uMake+</a></li>
                            <li><a href="/explore" className="hover:underline">Explore</a></li>
                            <li><a href="/pricing" className="hover:underline">Pricing</a></li>
                            <li><a href="/about" className="hover:underline">About</a></li>
                            <li><a href="/app-updates" className="hover:underline">App Updates</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 font-graphik text-[15px] text-[#959eaa]">Features</h4>
                        <ul className="space-y-2 text-[15px] font-graphik">
                            <li><a href="/umake" className="hover:underline">Design</a></li>
                            <li><a href="/explore" className="hover:underline">Present</a></li>
                            <li><a href="/pricing" className="hover:underline">Share & Publish</a></li>

                        </ul>
                    </div>


                    <div>
                        <h4 className="font-semibold mb-4 font-graphik text-[15px] text-[#959eaa] ">Why uMake</h4>
                        <ul className="space-y-2 text-[15px] font-graphik">
                            <li><a href="/architects" className="hover:underline">Architects & Interior Designers</a></li>
                            <li><a href="/designers" className="hover:underline">Graphic & UX Designers</a></li>
                            <li><a href="/business" className="hover:underline">Business Owners</a></li>
                            <li><a href="/marketing" className="hover:underline">Marketing & Sales</a></li>
                            <li><a href="/students" className="hover:underline">Students & Teachers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 font-graphik text-[15px] text-[#959eaa]">Help</h4>
                        <ul className="space-y-2 text-[15px] font-graphik">
                            <li><a href="/instagram" className="hover:underline">Learn</a></li>
                            <li><a href="/youtube" className="hover:underline">Forum</a></li>
                            <li><a href="/facebook" className="hover:underline">FAQ</a></li>
                            <li><a href="/twitter" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 font-graphik text-[15px] text-[#959eaa]">Follow Us</h4>
                        <ul className="space-y-2 text-[15px] font-graphik">
                            <li><a href="/instagram" className="hover:underline">Instagram</a></li>
                            <li><a href="/youtube" className="hover:underline">YouTube</a></li>
                            <li><a href="/facebook" className="hover:underline">Facebook</a></li>
                            <li><a href="/twitter" className="hover:underline">Twitter</a></li>
                            <li><a href="/linkedin" className="hover:underline">LinkedIn</a></li>
                        </ul>
                    </div>
                    </div>
                    </div>

                    <div className="mx-auto text-center lg:hidden  mt-8 mb-32  space-x-3  text-black  ">
                            <a href="/privacy-policy" className="cursor-pointer font-grapik text-[15px] hover:text-red-400">Privacy Policy</a>
                            <a> | </a>
                            <a href="/terms-of-use" className="cursor-pointer font-grapik text-[15px] hover:text-red-400">Terms of Use</a>


                        <p className=" lg:flex text-[14px] font-grapik mt-5 text-[#959eaa]">                
                            uMake, Inc. All rights reserved
                        </p>
                        </div>




        </footer>
    );
}

export default Footer;
