import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import ScrollToTop from "../../layout/Scroll";
import Subscribe from "../../layout/Subscribe";
import Hero from "../../utils/Hero";
import Out2 from "../../utils/Out2";
import Info from "./Info";

export default function Index() {
  return (
    <main className="flex flex-col bg-[#F9F9F9]">
      <ScrollToTop />
      <Header />
      <Hero name="Services" bg="#079200" />
      <Info />
      <Out2 />
      <Subscribe />
      <Footer />
    </main>
  );
}
