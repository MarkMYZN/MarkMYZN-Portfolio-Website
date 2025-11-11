import React from "react";
import styles from "./navbar.module.css";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation(); // Get current URL path

  return (
    <div className={styles.btnContainer}>
      <Link to="/">
        <button
          className={`${styles.home1} ${
            location.pathname === "/" ? styles.active : ""
          }`}>
          MarkCS
        </button>
      </Link>

      <Link to="/">
        <button
          className={`${styles.home2} ${
            location.pathname === "/" ? styles.active : ""
          }`}>
          Home
        </button>
      </Link>

      <Link to="/about">
        <button
          className={`${styles.about} ${
            location.pathname === "/about" ? styles.active : ""
          }`}>
          About Me
        </button>
      </Link>

      <Link to="/skills">
        <button
          className={`${styles.skills} ${
            location.pathname === "/skills" ? styles.active : ""
          }`}>
          Skills
        </button>
      </Link>

      <Link to="/recommendations">
        <button
          className={`${styles.recomms} ${
            location.pathname === "/recommendations" ? styles.active : ""
          }`}>
          Recommendations
        </button>
      </Link>

      <Link to="/contact">
        <button
          className={`${styles.contact} ${
            location.pathname === "/contact" ? styles.active : ""
          }`}>
          Contact Me!
        </button>
      </Link>
    </div>
  );
}
