import { useState } from "react";
import styled from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar({ title }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styled.headerWrapper}>
      <div className="container">
        <div className={styled.header}>
          <h3>{title}</h3>

          
          <div className={styled.hamburger} onClick={() => setIsOpen(!isOpen)}>
            ☰
          </div>

         
          <ul className={`${styled.navLinks} ${isOpen ? styled.show : ""}`}>
            <li><Link to="/">لیست خبرها</Link></li>
            <li><Link to="/make-article">افزودن خبر</Link></li>
            <li><Link to="/about">درباره ما</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;