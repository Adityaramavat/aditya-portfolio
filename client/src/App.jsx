import { ThemeProvider } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import BackToTop from "./components/BackToTop";

import Home from"./sections/Home";
import About from"./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Certificate  from "./sections/Certifications";
import Contact  from "./sections/Contact";

function App() {
  return (
    <ThemeProvider>
    <Navbar/>

    <main>

      <ScrollReveal>
      <Home/>
      </ScrollReveal>

      <ScrollReveal>
      <About/>
      </ScrollReveal>

      <ScrollReveal>
      <Skills/>
      </ScrollReveal>

      <ScrollReveal>
        <Projects/>
      </ScrollReveal>

      <ScrollReveal>
        <Achievements/>
      </ScrollReveal>

      <ScrollReveal>
        <Certificate/>
      </ScrollReveal>

      <ScrollReveal>
        <Contact/>
      </ScrollReveal>

    </main>

    <Footer/>

      <BackToTop/>

      </ThemeProvider>
  );
}
export default App;
