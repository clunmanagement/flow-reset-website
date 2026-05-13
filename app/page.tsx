import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Reformer from "@/components/Reformer";
import Classes from "@/components/Classes";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Reformer />
        <Classes />
        <Pricing />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
