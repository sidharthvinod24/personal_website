import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="-z-10 h-full w-full  bg-slate-950 bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
        <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
          <Navbar />
          <Hero />
          <Skills />
          <Education />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
