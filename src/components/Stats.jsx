import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex  `}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row sm-10`} >
        <h4 className="font-poppins relative bottom-16 left-16 font-semibold xs:text-[40px] text-[100px] text-blue-700">
          {stat.value}
        </h4>
        <p className="font-poppins relative right-14 font-normal xs:text-[0.9rem] text-slate-600 ">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
