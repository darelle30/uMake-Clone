import videoSrc5 from '../assets/LOOP3.mp4';

const text = "Easy & Powerful & Precise & Design & Mobile & Content & Easy & Powerful & Precise & Design & Mobile & Content & Easy & Powerful & Precise & Design & Mobile & Content & Easy & Powerful & Precise & Design & Mobile & Content & Easy & Powerful & Precise & Design & Mobile & Content & Easy & Powerful & Precise & Design & Mobile & Content & Easy & Powerful & Precise & Design & Mobile & Content &Easy & Powerful & Precise & Design & Mobile & Content & Easy & Powerful & Precise & Design & Mobile & Content";

export default function LoopTxt() {
  return (
    <div className="hidden  lg:flex items-center text-center justify-center w-full h-full overflow-hidden mx-auto pb-32">

      <video src={videoSrc5} loop autoPlay muted className='w-full h-[750px] object-cover' />

      {/* Text Animation */}
      <p className="mx-auto absolute animate-scroll tracking-tight text-center items-center justify-center text-nowrap text-[#3742ad] z-50 text-[85px] font-mabry ">
        {text}
      </p>

    </div>
  );
}
