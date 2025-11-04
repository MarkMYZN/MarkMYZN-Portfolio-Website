import { useState } from 'react'
import styles from './navbar.module.css'

export default function NavBar() {
  return (
    <div>
      <div 
      className={styles.btnContainer}>
        <button className={styles.home1}>MarkCS</button>
        <button className={styles.home2}>Home</button>
        <button className={styles.about}>About Me</button>
        <button className={styles.skills}>Skills</button>
        <button className={styles.reccoms}>Recommendations</button>
        <button className={styles.contact}>Contact Me!</button>
      </div>
    </div>
  )
}
