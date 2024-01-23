import icon1 from "../../assets/icons/icon13.png";
import icon2 from "../../assets/icons/icon14.png";
import icon3 from "../../assets/icons/icon15.png";
import { Btn } from "../../utils/Button";
export default function Report() {
  return (
    <main className="flex flex-col md:grid grid-cols-3 text-white bg-[#0060D2] text-center">
      <div className="flex flex-col gap-7 justify-between items-center px-5 md:px-20 py-10">
        <img src={icon1} alt="" />
        <b className="text-2xl md:text-[36px] leading-normal font-[500]">
          Report Lost or Damaged Goods
        </b>
        <p>Customer</p>
        <Btn name="Report Now" />
      </div>
      <div className="flex flex-col gap-7 justify-between items-center px-5 md:px-20 py-10 border-y md:border-y-0 md:border-x">
        <img src={icon2} alt="" />
        <b className="text-2xl md:text-[36px] leading-normal font-[500]">
          Register My Bag
        </b>
        <p>
          Scan my bar code, activate guarantee, lost luggage tracing, 24/7
          customer service
        </p>
        <Btn name="Register Now" />
      </div>
      <div className="flex flex-col gap-7 justify-between items-center px-5 md:px-20 py-10">
        <img src={icon3} alt="" />
        <b className="text-2xl md:text-[36px] leading-normal font-[500]">
          Found An Orient Luggage?
        </b>
        <p>Airlines</p>
        <Btn name="Report Now" />
      </div>
    </main>
  );
}
