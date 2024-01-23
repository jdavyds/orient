import check from "../../assets/check.png";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";

export default function Info() {
  return (
    <main className="px-5 md:px-20 py-10 flex flex-col gap-10 md:gap-16">
      <div className="md:w-2/3 flex flex-col gap-5 justify-center items-center text-center mx-auto">
        <h3 className="text-2xl md:text-[48px] text-head leading-snug">
          Our Services: Elevating Your Travel Security Experience
        </h3>
        <p className="md:text-lg">
          At Orient Services, we offer a comprehensive range of expert bag and
          baggage wrapping solutions designed to safeguard your belongings with
          precision, elegance, and eco-conscious practices. Elevate your travel
          security with our tailored services that cater to your individual
          needs.
        </p>
      </div>
      <div className="flex flex-col md:grid grid-cols-2 gap-10 items-center md:text-lg">
        <div className="flex flex-col gap-5">
          <h3 className="text-xl md:text-[32px] text-head ">
            Luggage Wrapping
          </h3>
          <p>
            At Orient Services, our luggage wrapping service goes beyond
            conventional protection. Each wrap is meticulously crafted to
            safeguard your belongings from scratches, tears, and mishandling
            during travel. Our expert team utilizes high-quality materials and
            precise techniques, ensuring an additional layer of defense for your
            luggage.
            <br />
            By using Orient Services, You:
          </p>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-2 items-center">
              <img src={check} alt="" />
              Shield your luggage against external damage
            </li>
            <li className="flex gap-2 items-center">
              <img src={check} alt="" />
              Experience the polished look of professionally wrapped luggage
            </li>
            <li className="flex gap-2 items-center">
              <img src={check} alt="" />
              Minimize wear and tear
            </li>
          </ul>
        </div>
        <figure className="w-full">
          <img
            src={service1}
            alt=""
            className="object-cover w-full max-h-[430px] rounded-2xl"
          />
        </figure>
      </div>
      <div className="flex flex-col-reverse md:grid grid-cols-2 gap-10 items-center md:text-lg">
        <figure className="w-full">
          <img
            src={service2}
            alt=""
            className="object-cover w-full max-h-[430px] rounded-2xl"
          />
        </figure>
        <div className="flex flex-col gap-5">
          <h3 className="text-xl md:text-[32px] text-head ">Luggage Tracing</h3>
          <p>
            Experience control and reassurance throughout your journey with our
            cutting-edge tracing technology. Real-time tracking provides updates
            on your {`luggage's`} location, minimizing the risk of loss or
            misplacement during transit.
            <br />
            By using our luggage tracing services, you:
          </p>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-2 items-center">
              <img src={check} alt="" />
              Stay informed about your {`luggage's`} whereabouts
            </li>
            <li className="flex gap-2 items-center">
              <img src={check} alt="" />
              Eliminate concerns about loss or delays
            </li>
            <li className="flex gap-2 items-start">
              <img src={check} alt="" />
              Travel confidently, knowing that your belongings are always within
              reach.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:grid grid-cols-2 gap-10 items-center md:text-lg">
        <div className="flex flex-col gap-5">
          <h3 className="text-xl md:text-[32px] text-head ">
            Luggage Weighing
          </h3>
          <p>
            At Orient Services, we understand the importance of adhering to
            airline weight restrictions to avoid excess baggage fees or
            last-minute repacking at the airport. Our professional luggage
            weighing service offers precise measurements, ensuring your bags
            meet airline requirements effortlessly.
            <br />
            By using Orient Services, You:
          </p>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-2 items-center">
              <img src={check} alt="" />
              Ensure your luggage complies with airline weight restrictions
            </li>
            <li className="flex gap-2 items-center">
              <img src={check} alt="" />
              Avoid unexpected fees
            </li>
            <li className="flex gap-2 items-center">
              <img src={check} alt="" />
              Save time and stress by knowing your {`bag's`} weight in advance
            </li>
          </ul>
        </div>
        <figure className="w-full">
          <img
            src={service3}
            alt=""
            className="object-cover w-full max-h-[430px] rounded-2xl"
          />
        </figure>
      </div>
      <div className="flex flex-col-reverse md:grid grid-cols-2 gap-10 items-center md:text-lg">
        <figure className="w-full">
          <img
            src={service4}
            alt=""
            className="object-cover w-full max-h-[430px] rounded-2xl"
          />
        </figure>
        <div className="flex flex-col gap-5">
          <h3 className="text-xl md:text-[32px] text-head ">Rewrap Services</h3>
          <p>
            At Orient Services, our rewrap services offer a fresh layer of
            protection for your belongings, ensuring they remain shielded
            throughout your journey. Whether your initial wrap has worn off or
            you seek an additional safeguard, our rewrapping solutions provide
            renewed security.
            <br />
            By using our luggage tracing services, you:
          </p>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-2 items-center">
              <img src={check} alt="" />
              Reinforce your luggage with a new protective layer
            </li>
            <li className="flex gap-2 items-center">
              <img src={check} alt="" />
              Preserve your bags against wear and tear
            </li>
            <li className="flex gap-2 items-center">
              <img src={check} alt="" />
              Extend luggage lifespan
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
