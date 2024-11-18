import Navbar from "./components/nav";
import Hero from "./components/hero";
import Project from "./components/project";
import Work from "./components/work";
import Extension from "./components/extension";
import Customise from "./components/customise";
import Everywhere from "./components/everywhere";
import Sponsors from "./components/sponsors";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Project/>
    <Work/>
    <Extension/>
    <Customise/>
    <Everywhere/>
    <Sponsors/>
    <Footer/>
    </div>
  );
}
