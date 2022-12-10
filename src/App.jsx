import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Footers from "./Component/Footers/Footers";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Projects from "./Component/Projects/Projects";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footers />
    </div>
  );
}

export default App;
