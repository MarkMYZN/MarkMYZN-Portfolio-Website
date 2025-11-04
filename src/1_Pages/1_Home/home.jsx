import React from 'react'
import NavBar from '../../2_Components/1_navbar/navbar.jsx'
import pubStyle from '../../0_Public_Styling/pubStyle.module.css'
import homeStyles from './home.module.css'

function Home() {
  return(
    <>
    <title>MarkOpSec's Portfolio Website</title>
      <NavBar />
      <div className={homeStyles.homepage}>
        <h1>Welcome To My Portfolio!</h1>
        <h2>Scroll down to check some of my projects below!</h2>
      </div>
      <div className={pubStyle.cardDivider}>
        {/* divider here */}
      </div>
      <div className={homeStyles.projHeader}>
        
        <h1>Latest projects i've been working on:</h1>

        <div className={homeStyles.container}>
          <div className={homeStyles.items}>
            <img src="assets\web_pic.png" alt="Portfolio_Website" width="100px" height="100px"/>
            <div className={homeStyles.itemText}>
              <h3>Portfolio Website</h3>
              <p>This is my Personal Portfolio Website</p>
            </div>  
          </div>
          <div className={homeStyles.items}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="ReactJS Logo" width="100px" height="100px"/>
            <div className={homeStyles.itemText}>
              <h3>Parcel Dispatch</h3>
              <p>My hobby 3D Game inspired from my First ever job. (Work in progress!)</p>
            </div>
          </div>


        </div>
      </div>
    </>
  )
  
}

export default Home