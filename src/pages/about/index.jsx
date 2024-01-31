import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import ScrollToTop from "../../layout/Scroll";
import Subscribe from "../../layout/Subscribe";
import Out from "../../utils/Out2";
// import Awards from "./Awards";
import Hero from "../../utils/Hero";
import Story from "./Story";
import Team from "./Team";
import Values from "./Values";

export default function Test() {
  return (
    <main className="flex flex-col bg-[#F9F9F9]">
      <ScrollToTop />
      <Header />
      <Hero name="About Us" bg="#EB242B" />
      <Story />
      <Values />
      <Team />
      {/* <Awards /> */}
      <Out />
      <Subscribe />
      <Footer />
    </main>
  );
}
