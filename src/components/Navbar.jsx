import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">

      <div className="container nav-inner">

        <div className="logo">
          Bahuchar Industry
        </div>

        <div
          className="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </div>

        <div className={`nav-links ${open ? "active" : ""}`}>

          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link to="/services" onClick={() => setOpen(false)}>
            Services
          </Link>

          <Link to="/machines" onClick={() => setOpen(false)}>
            Machines
          </Link>

          <Link to="/gallery" onClick={() => setOpen(false)}>
            Gallery
          </Link>

          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>

        </div>

      </div>

    </div>
  );
}