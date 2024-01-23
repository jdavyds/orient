import { Btn } from "../../utils/Button";

export default function Intro() {
  return (
    <main className="px-5 md:px-20 py-10 md:py-20 flex flex-col md:grid grid-cols-2 gap-10 md:gap-16 md:items-center">
      <div className="w-full h-[80vw] md:h-[370px] relative rounded-xl">
        <iframe
          className="w-full h-full object-contain rounded-lg"
          src="https://www.youtube.com/embed/xwzpU4cjb5I"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
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
