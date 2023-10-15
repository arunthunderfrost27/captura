import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} sm:px-16 px-2 m:py-12 py-4 text-center sm:flex-row flex-col bg-white rounded-[8px] outline-200 box-shadow `}>
    <div className="flex-1 flex flex-col text-center">
      <h2 className={styles.heading2}>Are You Ready to<br/> Rediscover Your Moments?</h2>
      <p className={`font-poppins font-normal text-dimblack leading-[30.8px] mx-40 my-10 text-justify  `}>
      The collective joy of your event is waiting for you! Explore the unified gallery, find your special snapshots, and keep them close, forever. Don’t let any moment slip away – start your journey back to the joyous times now!
      </p>
      <div className="relative left-60 px-40">
      <button className={`flex flex-col py-3 z-[10] px-4  font-poppins font-medium text-[18px] text-white bg-blue-900 rounded-[6px] outline-none ${styles}`}>
    Get Started 
  </button>
    </div>
    </div>
  </section>
);

export default CTA;
