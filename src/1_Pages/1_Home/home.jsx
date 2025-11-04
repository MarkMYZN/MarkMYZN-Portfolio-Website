import { useState } from 'react'
import styles from './home.module.css'
import NavBar from '../../2_Components/1_NavBar/navbar.jsx'

function App() {
  return(
    <>
    <title>MarkOpSec's Portfolio Website</title>
      <NavBar />
      <div className={styles.homepage}>
        <h1>Welcome To My Portfolio!</h1>
        <h2>Scroll down to check some of my projects below!</h2>
      </div>
      <div className={styles.divider}>
        {/* divider here */}
      </div>
      <div className={styles.projHeader}>
        
        <h1>Latest projects i've been working on:</h1>

        <div className={styles.container}>
          <div className={styles.items}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="ReactJS Logo" width="100px" height="100px"/>
              <div className={styles.itemText}>
                <h3>Portfolio Website</h3>
                <p>This is my Personal Portfolio Website</p>
              </div>
          </div>
          <div className={styles.items}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="ReactJS Logo" width="100px" height="100px"/>
            <div className={styles.itemText}>
              <h3>Parcel Dispatch</h3>
              <p>My hobby 3D Game inspired from my First ever job. (Work in progress!)</p>
            </div>
          </div>


        </div>
      </div>
    </>
  )
  
}

export default App