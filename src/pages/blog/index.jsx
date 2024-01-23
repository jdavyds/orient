import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import ScrollToTop from "../../layout/Scroll";
import Subscribe from "../../layout/Subscribe";
import Hero from "../../utils/Hero";
import Blogs from "./Blogs";

export default function Index() {
  return (
    <main className="flex flex-col bg-[#F9F9F9]">
      <ScrollToTop />
      <Header />
      <Hero name="Blog" bg="#2B2B2B" />
      <Blogs />
      <Subscribe />
      <Footer />
    </main>
  );
}
