import Navbar from "../components/Navbar";
import About from "../components/about/about";
import Experience from "../components/experience/experience";
import Hero from "../components/hero/Hero";
import Portofolio from "../components/portofolio/portofolio";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Portofolio />
    </>
  );
}
