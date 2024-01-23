import img from "../../assets/bg.png";
import { Btn } from "../../utils/Button";

export default function Hero() {
  return (
    <main
      className="w-full h-[80vh] relative z-[0] bg-cover bg-center bg-no-repeat px-5 md:px-20 py-10 flex flex-col justify-center items-start gap-5 text-white"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute w-full h-full top-0 left-0 bg-[rgb(0,0,0,0.4)] z-[-1]"></div>
      <h2 className="md:w-2/3 text-2xl md:text-[64px] font-[500] leading-normal">
        You Bring Your Luggage, We’ll Handle The Baggage Wraping
      </h2>
      <p className="text-lg md:text-2xl">
        Secure Your Journey with Expert Bag and Baggage <br className="hidden md:block" /> Wrapping
      </p>
      <Btn name="Contact Us" slug="/contact-us" />
    </main>
  );
}
