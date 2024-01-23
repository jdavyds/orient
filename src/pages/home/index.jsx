import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import ScrollToTop from "../../layout/Scroll";
import Subscribe from "../../layout/Subscribe";
import Out2 from "../../utils/Out2";
import Blog from "./Blog";
import Feat from "./Feat";
import Hero from "./Hero";
import Intro from "./Intro";
import Quote from "./Quote";
import Report from "./Report";
import Reviews from "./Reviews";
import Services from "./Services";
import Why from "./Why";

export default function Test() {
  return (
    <main className="flex flex-col bg-[#F9F9F9]">
      <ScrollToTop />
      <Header />
      <Hero />
      <Quote />
      <Intro />
      <Feat />
      <Services />
      <Why />
      <Blog />
      <Out2 />
      <Reviews />
      <Report />
      <Subscribe />
      <Footer />
    </main>
  );
}
