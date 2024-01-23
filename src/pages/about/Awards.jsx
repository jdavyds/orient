import award from "../../assets/award.png";

export default function Awards() {
  return (
    <main className="px-5 md:px-20 py-10 flex flex-col gap-10">
      <h3 className="text-2xl md:text-[48px] text-head mx-auto">Awards & Recognition</h3>
      <div className="w-full flex flex-col gap-5">
        <Single
          img={award}
          title="Traveler's Choice Award"
          text="In a testament to our unwavering commitment to redefining travel security, Orient Services proudly received the prestigious accolade in 2022 as the unrivaled choice for travel security solutions, as voted by discerning travelers globally."
        />
        <Single
          img={award}
          title="Traveler's Choice Award"
          text="In a testament to our unwavering commitment to redefining travel security, Orient Services proudly received the prestigious accolade in 2022 as the unrivaled choice for travel security solutions, as voted by discerning travelers globally."
        />
        <Single
          img={award}
          title="Traveler's Choice Award"
          text="In a testament to our unwavering commitment to redefining travel security, Orient Services proudly received the prestigious accolade in 2022 as the unrivaled choice for travel security solutions, as voted by discerning travelers globally."
        />
      </div>
    </main>
  );
}


function Single({ img, title, text }) {
    return (
      <div className="w-full flex flex-col md:flex-row items-center gap-5 bg-white p-4 border rounded-xl">
        <img src={img} alt="" />
        <div className="flex flex-col gap-4 mr-auto">
          <b className="text-xl md:text-2xl text-black">{title}</b>
          <p className="">{text}</p>
        </div>
      </div>
    );
  }
  