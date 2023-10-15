import { page2 } from "../assets";
import styles from "../style";
import Button from "./Button";

const Obj = () => (
  <section className={`sm:px-16 px-2 text-center relative bottom-60 sm:flex-row flex-col `}>
    <div className="flex-1 flex flex-col text-center">
      <h2 className="font-poppins font-semibold xs:text-[40px] text-[30px] text-black w-full">Sharing Your Precious<br/>  Moments, Effortlessly!</h2>
      <p className={`font-poppins font-normal text-dimblack leading-[30.8px] mx-20 my-10 text-justify  `}>
      At Captura, we understand the value of reliving joyful experiences. That’s why we’ve created a platform where accessing and sharing your event photos is as easy as a breeze. With our user-friendly interface, and instant sharing features, we ensure that your precious moments are just a click away! Join us, and let’s create memories that last a lifetime!</p>

      <div className={`w-full relative px-40 `}>
        <img src={page2} alt="home" className="w-[100%] h-[100%] " />

    </div>
    </div>
  </section>
);

export default Obj;
