import icon from "../../assets/icons/icon8.png";
export default function Why() {
  return (
    <main className="px-5 md:px-20 py-10 md:py-20 flex flex-col gap-10 bg-white">
      <h3 className="text-2xl md:text-[48px] text-head mx-auto">
        Why Orient Services
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10">
        <Single
          img={icon}
          title="Peace of Mind"
          desc="Travel confidently, knowing that your belongings are not just secure but also presented with finesse by Orient Services."
        />
        <Single
          img={icon}
          title="Luggage Tracing"
          desc="Stay informed at every step. Our tracing technology provides live updates on your luggage's location and movement."
        />
        <Single
          img={icon}
          title="Enhanced Security"
          desc="Fear no more. Our comprehensive approach addresses concerns about tampering and theft, providing an extra layer of protection."
        />
        <Single
          img={icon}
          title="Precision Protection"
          desc="Your belongings deserve the utmost care. Our meticulous wrapping safeguards against damage, tears, and wear during transit."
        />
      </div>
    </main>
  );
}

const Single = ({ title, desc, img }) => {
  return (
    <div className="flex flex-col gap-3 md:p-4 items-center text-center">
      <img src={img} alt={title} className="h-14 w-14" />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-[500] text-head">{title}</h3>
        <p className="text-sm md:text-base">{desc}</p>
      </div>
    </div>
  );
};
