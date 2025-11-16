import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <section>
      <nav>
        <Link to="/home">
          <button className={styles.btnItem}>Home</button>
        </Link>
        <Link to="/about">
          <button className={styles.btnItem}>About</button>
        </Link>
        <Link to="/skills">
          <button className={styles.btnItem}>Skills</button>
        </Link>
        <Link to="/tech-picks">
          <button className={styles.btnItem}>Tech Picks</button>
        </Link>
        <Link to="/contact">
          <button className={styles.contact}>Contact Me!</button>
        </Link>
      </nav>
    </section>
  );
}
