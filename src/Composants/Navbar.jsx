import React from "react";
import { Link } from "react-router-dom";
import logo from "../../public/images/youm.jpg";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <h2>SERIGNE FALLOU YOUM</h2>
      </div>

      <nav className="navbar-links">
        <Link to="/">Accueil</Link>
        <Link to="/APropos">APropos</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Navbar