import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import ScrollToTop from "../../layout/Scroll";
import Subscribe from "../../layout/Subscribe";
import Hero from "../../utils/Hero";
import Form from "./Form";

export default function Index() {
  return (
    <main className="flex flex-col bg-[#F9F9F9]">
      <ScrollToTop />
      <Header />
      <Hero name="Pre-Book Our Services" bg="#EB242B" />
      <Form />
      <Subscribe />
      <Footer />
    </main>
  );
}
