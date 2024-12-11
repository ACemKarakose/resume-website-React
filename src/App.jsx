import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Technologies from "./components/Technologies.jsx";
import Experience from "./components/Experience.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-800">

          <div className='fixed top-0 -z-10 h-full w-full'>

              <div
                  className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
          </div>

          <div className="container mx-auto px-4">
              <Navbar/>
              <Hero/>
              <About/>
              <Technologies/>
              <Experience/>
              <Project/>
              <Contact/>
          </div>

      </div>
  );
}
