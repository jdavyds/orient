import icon1 from "../../assets/icons/icon9.png";
import icon2 from "../../assets/icons/icon10.png";
import icon3 from "../../assets/icons/icon11.png";
export default function Values() {
  return (
    <main className="px-5 md:px-20 py-10 flex flex-col gap-10">
      <h3 className="text-2xl md:text-[48px] text-head mx-auto">Our Values</h3>
      <div className="flex flex-col md:grid grid-cols-3 gap-5 md:gap-10">
        <Single
          img={icon3}
          title="Precision $ Excellence"
          desc="We uphold the highest standards of precision and excellence in every aspect of our services. From meticulous wrapping techniques to ensuring top-tier customer satisfaction, precision is ingrained in everything we do."
        />
        <Single
          img={icon1}
          title="Passion For Travel Security"
          desc="Our passion drives our dedication to redefining travel security. We are driven by the desire to provide not just protection but a seamless, sophisticated, and stress-free travel experience for our customers."
        />
        <Single
          img={icon2}
          title="Integrity & Transparency"
          desc="Integrity and transparency are the cornerstones of our business. We operate with honesty, transparency, and ethical practices, ensuring trust and credibility in all our interactions."
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
