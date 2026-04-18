import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Project from "@/components/sections/Project";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white dark:bg-black  transition-all duration-500">
      <Hero />
      <About />
      <TechStack />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
