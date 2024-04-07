import "./index.css";
import Home from "./views/home/home";
import Navbar from "./components/Navbar";
import AboutMe from "./views/AboutMe/AboutMe";
import Technologies from "./views/Technologies/Technologies";
import Projects from "./views/Projects/Projects";
import Skills from "./views/Skills/Skills";
import Contact from "./views/Contact/Contact";
import { LanguageProvider } from "./context/LanguageContext.jsx";

function App() {
  return (
    <LanguageProvider>
      <div className="w-full ">
        <Navbar />
        <Home></Home>
        <AboutMe></AboutMe>
        <Technologies />
        <Skills />
        <Projects />
        <Contact></Contact>
      </div>
    </LanguageProvider>
  );
}

export default App;
