import React from 'react'
import cardStyles from '../../2_Components/3_Card/card.module.css'
import NavBar from '../../2_Components/1_navbar/navbar.jsx'
import skillsStyles from './skills.module.css'

function Skills() {
  return(
    <>
    <title>MarkOpSec's Skills</title>
      <NavBar />
      <div>
        <h1>
          My Skills
        </h1>
        <div className={cardStyles.cardDivider}>
          {/* divider here */}
        </div>
      </div>
    </>
  )
  
}

export default Skills