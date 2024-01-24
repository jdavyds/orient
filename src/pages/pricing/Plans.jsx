import check from "../../assets/check.png";
import pricing1 from "../../assets/pricing1.png";
import pricing2 from "../../assets/pricing2.png";
import pricing3 from "../../assets/pricing3.png";

export default function Plans() {
  return (
    <main className="px-5 md:px-20 py-10 md:py-20 flex flex-col md:grid grid-cols-3 gap-10">
      <div className="flex flex-col gap-5 rounded-2xl border bg-white p-5 md:p-10 items-center">
        <img src={pricing1} alt="" />
        <b className="text-head text-xl text-center">Carrion Bag</b>
        <p className="text-center">
          <b className="text-head text-2xl">$15 /</b> per carrion bag
        </p>
        <ul className="flex flex-col gap-5 w-full">
          <li className="flex gap-2 items-center">
            <img src={check} alt="" />
            Access to all our exclusive services
          </li>
          <li className="flex gap-2 items-center">
            <img src={check} alt="" />
            Luggage Wrapping & Weighing
          </li>
          <li className="flex gap-2 items-center">
            <img src={check} alt="" />
            Rewrap Service
          </li>
        </ul>
        <button
          className={`min-w-fit w-fit h-10 md:h-14 mt-5 font-[500] md:font-[600] text-white flex items-center justify-center px-8 lato bg-primary uppercase`}
        >
          Pre-book Service
        </button>
      </div>

      <div className="flex flex-col gap-5 rounded-2xl border bg-white p-5 md:p-10 items-center relative md:scale-y-[1.1]">
        <div className="absolute top-0 left-0 border-[#0060D2] w-full h-full border-4 rounded-2xl flex justify-center items-start">
          <b className="text-white rounded-full px-5 py-2 bg-[#0060D2] text-center -translate-y-[50%]">
            Recommended
          </b>
        </div>
        <img src={pricing2} alt="" />
        <b className="text-head text-xl text-center">Standard Bag</b>
        <p className="text-center">
          <b className="text-head text-2xl">$25 /</b> per 25kg bag
        </p>
        <ul className="flex flex-col gap-5 w-full">
          <li className="flex gap-2 items-center">
            <img src={check} alt="" />
            Access to all our exclusive services
          </li>
          <li className="flex gap-2 items-center">
            <img src={check} alt="" />
            Luggage Wrapping & Weighing
          </li>
          <li className="flex gap-2 items-center">
            <img src={check} alt="" />
            Luggage Tracing
          </li>
          <li className="flex gap-2 items-center">
            <img src={check} alt="" />
            Rewrap Service
          </li>
        </ul>
        <button
          className={`min-w-fit w-fit h-10 md:h-14 mt-5 font-[500] md:font-[600] text-white flex items-center justify-center px-8 lato bg-primary uppercase`}
        >
          Pre-book Service
        </button>
      </div>

      <div className="flex flex-col gap-5 rounded-2xl border bg-white p-5 md:p-10 items-center">
        <img src={pricing3} alt="" />
        <b className="text-head text-xl text-center">Oversized Bag</b>
        <p className="text-center">
          <b className="text-head text-2xl">$30 /</b> per 33kg bag
        </p>
        <ul className="flex flex-col gap-5 w-full">
          <li className="flex gap-2 items-center">
            <img src={check} alt="" />
            Access to all our exclusive services
          </li>
          <li className="flex gap-2 items-center">
            <img src={check} alt="" />
            Luggage Wrapping & Weighing
          </li>
          <li className="flex gap-2 items-center">
            <img src={check} alt="" />
            Luggage Tracing
          </li>
          <li className="flex gap-2 items-center">
            <img src={check} alt="" />
            Rewrap Service
          </li>
        </ul>
        <button
          className={`min-w-fit w-fit h-10 md:h-14 mt-5 font-[500] md:font-[600] text-white flex items-center justify-center px-8 lato bg-primary uppercase`}
        >
          Pre-book Service
        </button>
      </div>
    </main>
  );
}
