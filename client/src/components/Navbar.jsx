
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Achievements", "#achievements"],
    ["Certificates", "#certifications"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="navbar">
      <a href="#home" className="logo"
      onClick={() => setMenuOpen(false)}>
        Aditya<span>.</span>
      </a>

       <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        {links.map(([name, url]) => (
          <a
            key={name}
            href={url}
            onClick={() => setMenuOpen(false)}
          >
            {name}
          </a>
        ))}

        </div>

    <ThemeToggle/>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={25}/> : <Menu size={25} />}
      </button>
    </nav>
  );
}

export default Navbar;
