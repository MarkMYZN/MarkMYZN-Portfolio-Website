import React from 'react'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <div
        className={styles.btnContainer}>

        <Link to="/">
          <button className={styles.home1}>MarkCS</button>
        </Link>
        <Link to="/">
          <button className={styles.home2}>Home</button>
        </Link>

        <Link to="/about">
          <button className={styles.about}>About Me</button>
        </Link>

        <Link to="/skills">
          <button className={styles.skills}>Skills</button>
        </Link>

        <Link to="/recommendations">
          <button className={styles.reccoms}>Recommendations</button>
        </Link>

        <Link to="/contact">
          <button className={styles.contact}>Contact Me!</button>
        </Link>

      </div>
    </div>
  )
}
