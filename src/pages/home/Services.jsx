import icon1 from "../../assets/icons/icon9.png";
import icon2 from "../../assets/icons/icon8.png";
import icon3 from "../../assets/icons/icon12.png";

export default function Services() {
  return (
    <main className="flex flex-col gap-10 px-5 md:px-20 py-10 ">
      <h3 className="text-2xl md:text-[48px] text-head mx-auto">
        Our Services
      </h3>
      <div className="flex flex-col md:grid grid-cols-3 gap-10 md:gap-20">
        <Single
          img={icon1}
          title="Luggage Wrapping"
          desc="Ensure your belongings stay safe and secure during transit with our premium protective wrapping. Our specialized materials shield your luggage from scratches, tears, and mishandling, maintaining their pristine condition."
        />
        <Single
          img={icon2}
          title="Luggage Tracing"
          desc="Our advanced tracking services not only ensure the safety of your belongings but also grant you peace of mind, eliminating the persistent fear and uncertainties associated with misplaced or lost luggage. That way you can focus on your journey"
        />
        <Single
          img={icon3}
          title="Luggage Weighing"
          desc="At Orient Services, we recognize the paramount significance of complying with airline weight regulations. We appreciate the implications of exceeding baggage allowances, which often lead to unexpected fees or the need for hurried, last-minute repacking at the airport. "
        />
      </div>
    </main>
  );
}

const Single = ({ title, desc, img }) => {
  return (
    <div className="flex flex-col gap-8 p-5 items-center text-center border bg-white rounded-xl">
      <img src={img} alt={title} className="h-14 w-14 md:h-16 md:w-16 mb-5" />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-[500] text-head">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};
