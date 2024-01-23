export default function Hero({ name, bg }) {
  return (
    <div
      className="flex justify-center items-center gap-3 text-white text-3xl md:text-[64px] h-[50vh] w-full"
      style={{ backgroundColor: bg }}
    >
      {name}
    </div>
  );
}
