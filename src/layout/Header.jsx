import logo from "../assets/logo.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { Btn } from "../utils/Button";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 left-0 z-[9999] bg-white text-head shadow-md px-5 md:px-20 py-4 flex items-center">
      <NavLink to="/" className="flex justify-start">
        <img src={logo} alt="" className="object-contain h-10 md:h-[unset]" />
      </NavLink>
      <nav
        className={`${
          open
            ? " left-0 top-16 px-5 py-5 bg-white md:bg-inherit "
            : " top-[-900%] left-0"
        } absolute md:static w-full z-[999999999] md:w-fit font-[500] flex flex-col md:flex-row shadow-md md:shadow-none  gap-3 md:gap-5 md:items-center transition-all duration-1000 ease-in-out overflow-y-scroll uppercase snap md:mx-auto`}
      >
        <NavLink to="/" className="">
          HOME
        </NavLink>
        <NavLink to="/about" className="">
          ABOUT US
        </NavLink>
        {/* <NavLink to="/services" className="">
          SERVICES
        </NavLink>
        <NavLink to="/pricing" className="">
          PRICING
        </NavLink> */}
        <NavLink to="/contact-us" className="">
          CONTACT US
        </NavLink>
        {/* <Btn
          name="pre-BOOK OUR SERVICES"
          slug="/pre-book"
          style="md:hidden flex"
        /> */}
      </nav>
      {/* <Btn
        name="pre-BOOK OUR SERVICES"
        slug="/pre-book"
        style="hidden md:flex"
      /> */}
      {open ? (
        <FaTimes
          onClick={() => setOpen(!open)}
          className="block md:hidden transition-all duration-1000 ease-in-out"
        />
      ) : (
        <FaBars
          onClick={() => setOpen(!open)}
          className="block md:hidden transition-all duration-1000 ease-in-out"
        />
      )}
    </header>
  );
}
