import Navbar from "./layout/Navbar";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Projects from "./sections/Project";
import Skills from "./sections/Skills";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
