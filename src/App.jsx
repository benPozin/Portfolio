import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume"

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-gray-900 to-gray-300 text-white">
        <Navbar />
        <Routes>
          <Route path ="/" element={<> <Hero /> <Projects /> <Contact /> </>} />
          <Route path ="/resume" element={<Resume/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;