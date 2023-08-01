import Navbar from "./components/Navbar";
import About from "./components/about";
import Home from "./components/home";
import Skills from "./components/Skills";
import Work from "./components/work";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
