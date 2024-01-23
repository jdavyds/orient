import { Link } from "react-router-dom";

export function Btn({ name, slug, style }) {
  return (
    <Link
      to={slug}
      className={`min-w-fit w-fit h-10 md:h-14 font-[500] md:font-[600] text-white flex items-center justify-center px-8 lato bg-primary uppercase ${style}`}
    >
      {name}
    </Link>
  );
}

export function BtnB({ name, slug }) {
  return (
    <Link
      to={slug}
      className={`min-w-fit w-fit h-10 md:h-14 font-[500] md:font-[600] lato text-primary border border-primary bg-inherit flex items-center justify-center px-8 uppercase`}
    >
      {name}
    </Link>
  );
}

export function BtnLink({ name, slug, color }) {
  return (
    <Link
      to={slug}
      className={`min-w-fit w-fit h-10 md:h-14 font-[500] md:font-[600] lato underline flex items-center justify-between px-8`}
      style={{ color: `${color}` }}
    >
      {name}
    </Link>
  );
}
