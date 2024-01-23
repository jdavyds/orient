import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Subscribe from "../../layout/Subscribe";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { blogs } from "../../utils/Blogs";

export default function Single() {
  let params = useParams();
  const [info, setInfo] = useState({});
  useEffect(() => {
    blogs.filter((detail) => {
      if (detail.slug === params.slug) {
        setInfo(detail);
      }
    });
  }, [params.slug]);

  return (
    <main>
      <Header />
      <main className="px-5 md:px-20 py-10 md:py-20 flex flex-col md:flex-row gap-10">
        <nav className="flex md:flex-col gap-5 text-head text-2xl">
          <span className="text-sm">Share</span>
          <FaFacebook className="" />
          <FaTwitter className="" />
          <FaInstagram className="" />
          <FaLinkedin className="" />
          <FaYoutube className="" />
        </nav>
        <section className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl md:text-[40px] font-[500] text-head leading-snug">
              {info?.title}
            </h3>
            <span className="text-head text-xs uppercase">{info?.date}</span>
          </div>
          <img
            src={info?.img1}
            alt=""
            className="w-full object-cover h-[60vh]"
          />
          <div className="">{info?.intro}</div>
          <img
            src={info?.img2}
            alt=""
            className="w-full object-cover h-[60vh]"
          />
          <div className="">{info?.other}</div>
        </section>
      </main>
      <Subscribe />
      <Footer />
    </main>
  );
}
