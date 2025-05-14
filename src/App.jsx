import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Weather from "./components/Weather";

const AppContent = () => {
  const location = useLocation();
  const showWeather = location.pathname !== "/resume";

  return (
    <div
      className="relative text-white"
      style={{
        backgroundImage: "url('/backgrounds/city_day_toronto.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />

      {/* Show weather only if not on /resume */}
      {showWeather && (
        <div className="px-4 mt-4">
          <Weather />
        </div>
      )}

      <Routes>
        <Route path="/" element={<><Hero /><Projects /><Contact /></>} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
