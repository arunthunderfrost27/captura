import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Features = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full " />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Features We Provide
      </h2>
=
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full text-black relative z-[10]">
      {feedback.map((card) => <FeedbackCard key={card.title} {...card} />)}
    </div>
  </section>
);

export default Features;
