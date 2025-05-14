import {Link} from "react-router-dom";
import Weather from "./Weather";

const Navbar = () => {
    return (
      <nav className="flex justify-between items-start p-3 bg-black-900">
        <h1 className="text-2xl font-bold">Ben's Portfolio</h1>
        <ul className="flex space-x-8">
          <li><Link to="/#" className="text-xl font-bold hover:text-gray-400">Home</Link></li>
          <li><Link to="/resume" className="text-xl font-bold hover:text-gray-400">Resume</Link></li>
          <li>
            <a href="https://github.com/benPozin" target="_blank">
              <img src="/github.png" alt="GitHub" className="h-8 w-auto" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/benjaminpozin/" target="_blank">
              <img src="/linkedin.png" alr="LinkedIn" className="h-8 w-auto" />
            </a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;