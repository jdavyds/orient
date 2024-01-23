import quote from "../../assets/quote.png";
import rev1 from "../../assets/rev1.png";
import rev2 from "../../assets/rev2.png";
import rev3 from "../../assets/rev3.png";

export default function Reviews() {
  return (
    <main className="flex flex-col gap-10 px-5 md:px-20 py-10 md:py-20">
      <h3 className="text-2xl md:text-[48px] text-head mx-auto">
        Customer Reviews
      </h3>
      <div className="flex flex-col md:grid grid-cols-3 gap-10 md:gap-20">
        {reviews.map((rev, i) => (
          <Single key={i} img={rev?.img} name={rev?.name} text={rev?.text} />
        ))}
      </div>
    </main>
  );
}

const Single = ({ text, name, img }) => {
  return (
    <div className="flex flex-col gap-5 p-5 items-center justify-center text-center border bg-white rounded-xl">
      <img src={quote} alt="" />
      <p>{text}</p>
      <div className="flex flex-col gap-2">
        <img src={img} alt={img} className="h-14 w-14" />
        <b>{name}</b>
      </div>
    </div>
  );
};

const reviews = [
  {
    img: rev1,
    name: "Sarah L.",
    text: "I've never felt more secure about my luggage until I tried Orient Services. Their attention to detail in wrapping my belongings was exceptional. Not only did my luggage arrive without a scratch, but the personalized branding also made it stand out. Highly recommended for hassle-free and elegant travel security!",
  },
  {
    img: rev2,
    name: "Alex M.",
    text: "Orient Services truly changed the game for me. As a frequent traveler, I've had my fair share of concerns about lost luggage. However, their tracing technology provided real-time updates, easing my worries. It's a relief knowing exactly where my belongings are during transit. Orient Services isn't just about protection; they bring peace of mind to every journey!",
  },
  {
    img: rev3,
    name: "Sarah L.",
    text: "Sustainability is important to me, even in my travels. Orient Services' eco-friendly wrapping materials align perfectly with my values. Not only did they ensure the safety of my luggage, but their commitment to environmentally conscious practices earned my trust. Thank you for offering a solution that cares for both my belongings and the planet!",
  },
];
