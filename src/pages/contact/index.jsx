import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import ScrollToTop from "../../layout/Scroll";
import Subscribe from "../../layout/Subscribe";
import Hero from "../../utils/Hero";
import Form from "./Form";

export default function Test() {
  return (
    <main className="flex flex-col bg-[#F9F9F9]">
      <ScrollToTop />
      <Header />
      <Hero name="Contact Us" bg="#2B2B2B" />
      <Form />
      <Subscribe />
      <Footer />
    </main>
  );
}
