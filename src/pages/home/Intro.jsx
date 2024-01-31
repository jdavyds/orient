import { Btn } from "../../utils/Button";

export default function Intro() {
  return (
    <main className="px-5 md:px-20 py-10 md:py-20 flex flex-col md:grid grid-cols-2 gap-10 md:gap-16 md:items-center">
      <div className="w-full text-center rounded-xl">
        <q className="text-lg leading-normal md:w-2/3">
          Orient Services is more than just wrapping; {`it's`} your partner in
          securing your travel memories. With our meticulous attention to detail
          and commitment to professionalism, we shield your belongings,
          providing a fortress of protection as you embark on your journey.
          Trust us to safeguard your possessions, allowing you to explore the
          world worry-free, knowing that your luggage is in safe hands with
          Orient Services.
        </q>
      </div>
      <div className="flex flex-col gap-5 w-full md:text-lg">
        <p>
          At Orient Services, {`we're`} dedicated to transforming your travel
          experience. With a passion for safeguarding your journey, we
          specialize in expert bag and baggage wrapping services across Canada.
          Our commitment to excellence, coupled with industry-leading techniques
          and premium materials, ensures the protection of your belongings while
          you explore the world.
        </p>
        <Btn name="Read About Us" slug="/about" />
      </div>
    </main>
  );
}
