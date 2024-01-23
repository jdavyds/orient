import team1 from "../../assets/team/team1.png";
import team2 from "../../assets/team/team2.png";
import team3 from "../../assets/team/team3.png";

export default function Team() {
  return (
    <main className="px-5 md:px-20 py-10 flex flex-col gap-10">
      <h3 className="text-2xl md:text-[48px] text-head mx-auto">Our Team</h3>
      <div className="flex flex-col md:grid grid-cols-3 gap-10 md:gap-16">
        <Single img={team1} name="Erus Dickson" position="General Manager" />
        <Single img={team2} name="Erus Dickson" position="General Manager" />
        <Single img={team3} name="Erus Dickson" position="General Manager" />
      </div>
    </main>
  );
}

const Single = ({ name, position, img }) => {
  return (
    <div className="flex items-end rounded-lg text-white relative">
      <img
        src={img}
        alt={name}
        className="max-h-[400px] w-full object-cover rounded-lg"
      />
      <div className="absolute bottom-0 left-0 w-full px-4 py-2 flex flex-col gap-1 bg-[linear-gradient(180deg,_rgba(16,16,16,0.50)_0%,_rgba(16,16,16,0.00)_100%,#101010_100%)]">
        <h3 className="text-lg font-[500]">{name}</h3>
        <p>{position}</p>
      </div>
    </div>
  );
};
