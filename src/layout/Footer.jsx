import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import sbo from "../assets/sbo.png";
import gasus from "../assets/gasus.png";

export default function Footer() {
  return (
    <footer className="flex flex-col text-white bg-secondary lato text-sm md:text-base">
      <section className="px-5 md:px-20 w-full border-y border-[#E9E9E94D] leading-relaxed grid grid-cols-2 md:grid-cols-[1fr_1.5fr_1fr] justify-between gap-4 md:gap-8">
        <div className="flex flex-col items-start gap-4 col-span-2 md:col-span-1 py-5 md:py-12">
          <img src={logo} alt="" className="object-contain " />
          <p>
            Orient Services: Elevating Travel Security. Expert bag and baggage
            wrapping with precision, elegance, and eco-conscious solutions.
            Protecting your belongings while redefining your travel experience.
          </p>
        </div>
        <nav className="flex justify-center font-[400] text-[#C9C9C9] py-2 md:py-12">
          <div className="flex flex-col gap-3">
            <h4 className="text-white mb-2 font-[700] text-lg">Quick Links</h4>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/contact-us">Contact Us</Link>
            <Link to="/pre-book">Pre-Book</Link>
            <Link to="/blogs">Blogs</Link>
          </div>
        </nav>
        <nav className="flex flex-col font-[400] gap-3 text-[#C9C9C9] py-2 md:py-12">
          <div className="flex flex-col gap-2">
            <h4 className="text-white mb-2 font-[700] text-lg">Location</h4>
            <p>5201 Regina Ave, Regina, SK S4W 1B3, Canada</p>
            <p>Tel: 639-997-7482</p>
            <p>info@orientservices.ca</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-white mb-2 font-[700] text-lg">
              Opening Hours
            </h4>
            <p>Monday - Sunday</p>
            <p>4:00 am - 7 pm</p>
          </div>
          <nav className="flex flex-col items-start gap-2 mt-4">
            <img src={sbo} alt="" />
            Trusted Business
          </nav>
          <h4></h4>
        </nav>
      </section>
      <div className="flex flex-col gap-10 leading-loose px-5 md:px-20 py-5 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-10">
          <span className="text-sm">
            Trusted by Travelers Nationwide: Orient Services - Your Reliable
            Partner in Secure and Stylish Travel Solutions.
          </span>
          <span className="hidden  md:flex flex-col md:flex-row text-center md:text-start gap-2 items-center">
            <img src={gasus} alt="" />
            <span className="text-sm">
              We are a business built on the <br className="hidden md:block" />{" "}
              foundation of Christian values and belief
            </span>
          </span>
        </div>
        <span className="w-full text-sm md:text-base flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="text-center md:text-start">
            © Orient Services. All Right Reserved
          </span>
          <div className="flex flex-col gap-4 items-center text-center">
            <nav className="flex gap-5 underline">
              <Link to="">Privacy Policy</Link>
              <Link to="">Terms of Service</Link>
            </nav>
          </div>
          <nav className="flex items-center justify-center gap-5  md:text-xl">
            <FaInstagram />
          </nav>
        </span>
      </div>
    </footer>
  );
}
