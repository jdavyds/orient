import img from "../../assets/bg.png";
// import { Btn } from "../../utils/Button";

export default function Hero() {
  return (
    <main
      className="w-full h-[80vh] relative z-[0] bg-cover bg-center bg-no-repeat px-5 md:px-20 py-10 flex flex-col justify-center items-start gap-5 text-white"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute w-full h-full top-0 left-0 bg-[rgb(0,0,0,0.4)] z-[-1]"></div>
      <h2 className="md:w-2/3 text-2xl md:text-[64px] font-[500] leading-normal">
        Where Seamless Travel Begins
      </h2>
      <p className="text-lg md:text-2xl md:w-2/3">
        Protect your luggage with a touch of personality! Our wrapping service
        ensures your bags are secure, recognizable, and stylishly protected,
        wherever you travel.
      </p>
      {/* <Btn name="Contact Us" slug="/contact-us" /> */}
    </main>
  );
}
