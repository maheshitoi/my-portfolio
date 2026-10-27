import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Work from "@/components/sections/Work";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Motion from "@/components/ui/Motion";

export default function Home() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Motion />
    </div>
  );
}
