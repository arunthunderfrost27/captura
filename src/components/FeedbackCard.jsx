import { quotes } from "../assets";

const FeedbackCard = ({ content, title }) => (
  <div className="flex justify-between flex-col px-10 py-10 rounded-[20px] max-w-[340px] h-80 md:mr-6 sm:mr-4 feedback-card">
        <p className="font-poppins font-normal text-[20px] font-bold text-black ">
      {title}
    </p>
    
    <p className="font-poppins font-normal text-[20px] leading-[32.4px] text-black ">
      {content}
    </p>

  </div>
);


export default FeedbackCard;
