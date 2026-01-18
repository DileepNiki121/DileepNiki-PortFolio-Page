import { useState, useEffect } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
      sections.forEach(sec => {
        const top = window.scrollY;
        if (top >= sec.offsetTop - 100) {
          setActive(sec.id);
        }
      });
    });
  }, []);

  return (
    <nav className="navbar">

      <div className={`nav-links ${open ? "open" : ""}`}>
        {["home","projects","experience","education","contact"].map(id => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {id.toUpperCase()}
          </a>
        ))}
      </div>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>
    </nav>
  );
}

export default Navbar;
