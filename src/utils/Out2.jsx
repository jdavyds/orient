import { Btn, BtnB } from "./Button";

export default function Out2() {
  return (
    <main className="w-full px-5 md:px-20 py-10 md:py-20 flex flex-col justify-center items-start gap-5 bg-[#F9E8E8]">
      <h2 className="md:w-1/2 text-2xl md:text-[40px] font-[500] leading-normal text-head">
        Experience the Orient Services Advantage Today!
      </h2>
      <p className="text-lg md:text-2xl md:w-2/3">
        Protect your belongings with precision. Track your luggage with ease.
        Travel with confidence.
      </p>
      <nav className="flex flex-wrap gap-5">
        <Btn name="pre-BOOK OUR SERVICES now" slug="/pre-order" />
        <BtnB name="check pricing plan" slug="/pricing" />
      </nav>
    </main>
  );
}
