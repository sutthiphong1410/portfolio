import About from "@/components/About/About";
import HomePage from "@/components/HomePage/HomePage";
import MyProject from "@/components/MyProject/MyProject";
import TechStack from "@/components/TechStack/TechStack";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white dark:bg-slate-900  transition-all duration-500">
      <HomePage/>
      <About/>
      <TechStack/>
      <MyProject/>
    </div>
  );
}
