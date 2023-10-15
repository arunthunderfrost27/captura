import styles from "../style";
import { desk } from "../assets";
import { google,github } from "../assets";
import { page1 } from "../assets";

const Hero = () => {
  return (
    <div className={`flex 2md:flex-row flex-col ${styles.paddingY} `}>

      <div className={`flex-1 m-10 relative bottom-10 right-40 ${styles.flexStart} flex-col xl:px-0 sm:px-48 py-20`}>
      <div className={`w-full relative left-60 mx-80 px-60 `}>
        <img src={page1} alt="home" className="w-[100%] h-[100%] " />

      </div>

        <div className="flex justify-between absolute items-center w-full z-10">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] relative bottom-60 mx-60 right-60 text-black ss:leading-[80px] leading-[50px]">
          Capture the Moment, Relive the Experience!
          </h1>
        </div>

        <p className={` text-black ${styles.paragraph} w-full relative bottom-28 m-60 my-10 right-60 z-[10]`}>
        Welcome to Captura, where we make reliving your favorite moments easier than ever! Attended an event? Find and download your captured memories effortlessly by simply entering your name and user photo.
       </p>

        <div className={`relative bottom-40 flex md:flex-row ${styles.paddingY}`}>
        <button className={`flex flex-col py-3 z-[10] px-4  font-poppins font-medium text-[18px] text-white bg-blue-900 rounded-[6px] outline-none ${styles}`}>
    Get Started 
  </button>
  <button className={`relative py-3 z-[10] px-8 mx-10 flex-center font-poppins font-medium text-[18px] text-black bg-white rounded-[6px] outline-none ${styles}`}>
  <img src={google} alt='google' className='absolute left-2 w-6 h-6 object-contain' />
    <div className="relative left-4">
    Sign up with Google
    </div>
  </button>

  </div>


      </div>

    </div>

  );
};

export default Hero;
