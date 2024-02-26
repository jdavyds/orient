import icon1 from "../../assets/icons/icon1.png";
import icon2 from "../../assets/icons/icon2.png";
import icon3 from "../../assets/icons/icon3.png";
import icon4 from "../../assets/icons/icon4.png";
import icon5 from "../../assets/icons/icon5.png";
import icon6 from "../../assets/icons/icon6.png";
import icon7 from "../../assets/icons/icon7.png";

export default function Feat() {
  return (
    <main className="flex flex-col gap-10 px-5 md:px-20 py-10">
      <h3 className="text-2xl md:text-[48px] text-head mx-auto text-center">
        The Importance of Wrapping Your Luggage
      </h3>
      <div className="flex flex-col md:grid grid-cols-2 gap-10 md:gap-20 md:items-center">
        <div className="flex flex-col gap-5">
          <Single
            title="Scratches and Scuffs"
            desc="Preventing cosmetic damage caused by rough handling, friction against other luggage, or abrasive surfaces during transit."
            img={icon1}
          />
          <Single
            title="Tears & Rips"
            desc="Shielding bags from tears or rips due to mishandling by airport staff or conveyor systems."
            img={icon2}
          />
          <Single
            title="Tampering and Theft"
            desc="Providing an extra layer of security that deters unauthorized access or tampering with luggage contents, reducing the risk of theft."
            img={icon3}
          />
          <Single
            title="Stains & Spills"
            desc="Protecting against spills of liquids, oils, or substances that might accidentally come into contact with the luggage during travel."
            img={icon4}
          />
          <Single
            title="Unpredictable Zippers"
            desc="Unpredictable zippers are no longer a concern with decreased chances of accidental opening."
            img={icon2}
          />
        </div>
        <div className="flex flex-col gap-5">
          <Single
            title="Rain & Moisture"
            desc="Using waterproof materials to safeguard luggage from rain or accidental exposure to moisture, preventing damage to belongings inside."
            img={icon5}
          />
          <Single
            title="Environmental Elements"
            desc="Guarding belongings from exposure to dust, dirt, and other environmental elements that could compromise their condition during transportation."
            img={icon6}
          />
          <Single
            title="Wear and Tear"
            desc="Minimizing wear and tear caused by constant movement, vibrations, and handling throughout the journey."
            img={icon7}
          />
          <Single
            title="Loose Items"
            desc="Ensures that loose items, such as sports equipment, remain securely in place."
            img={icon1}
          />
        </div>
      </div>
    </main>
  );
}

const Single = ({ title, desc, img }) => {
  return (
    <div className="flex gap-3 p-4 border bg-white rounded-lg items-center">
      <img src={img} alt={title} className="h-12 w-12" />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-[500] text-head">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};
