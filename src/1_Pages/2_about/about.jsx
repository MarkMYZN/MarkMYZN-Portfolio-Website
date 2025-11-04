import React from 'react'
import cardStyles from '../../2_Components/3_Card/card.module.css'
import NavBar from '../../2_Components/1_navbar/navbar.jsx'
import aboutStyle from './about.module.css'

function Skills() {
  return(
    <>
    <title>MarkOpSec's Skills</title>
      <NavBar />
      <div>
        <h1 className={aboutStyle.aboutHeader}>
          About Me 
          <br/>
          And Why i Chose Computer Science as my career path
        </h1>
        <div className={cardStyles.cardDivider} 
          style={{
            height: '200px', 
            width: '1210px auto 0',
            margin: 'auto',
            gap: '50px',
            borderRadius: '15px',
            alignContent: 'center',
            
          }}>
          <div className={aboutStyle.about}>
            <h2>
              I chose computer science because it’s the closest path to my goal of joining a cybersecurity team. 
              I’m passionate about programming and enjoy solving problems, always asking, "What if I tried this?"
              <br/>
              <br/>
              My curiosity started early, I loved tinkering with electronics as a kid, 
              sometimes even breaking them just to see how they worked. 
              Movies and shows about hackers also inspired me, 
              though I soon realized real hacking is very different from what’s shown on screen.
            </h2>
          </div>
        </div>
      </div>
      <div>
        <h1 className={aboutStyle.aboutHeader}>
          Work Ethic & Learning Style
        </h1>
        <div className={cardStyles.cardDivider} 
          style={{
            height: '250px', 
            width: '1210px auto 0',
            margin: '100px auto',
            marginBottom: '100px',
            gap: '50px',
            borderRadius: '15px',
            alignContent: 'center',
            
          }}>
          <div className={aboutStyle.about}>
            <h2>
              My work style mixes introverted and extroverted traits.
              I start by observing and working independently but become more engaged over time.
              I learn best by seeing and doing, experimenting and tinkering untill i become in content with it,
              or untill something works to my liking. 
              <br/>
              <br/>
              I enjoy collaborating, combining ideas to find better solutions with a team and make everyone feel included.
              I’m improving my communication, as I sometimes struggle to express myself or speak up.
              I handle pressure well, though sudden changes can overwhelm me and require time to process.
            </h2>
          </div>
        </div>
      </div>
    </>
  )
  
}

export default Skills