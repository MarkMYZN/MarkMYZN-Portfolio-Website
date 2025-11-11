import React from "react";
import NavBar from "../../2_Components/1_navbar/navbar.jsx";
import aboutStyle from "./about.module.css";
import Card from "../../2_Components/3_Card/card.jsx";

export default function Skills() {
  return (
    <>
      <title>About me</title>
      <NavBar />

      <div>
        <h1 className={aboutStyle.aboutHeader}>
          From Curiosity to Code: My Career Choice
        </h1>

        <div className={aboutStyle.cardWrapper}>
          <Card
            style={{
              backgroundColor: "#444d63",
              height: "auto",
              width: "100%",
              maxWidth: "1210px",
              margin: "auto",
              gap: "50px",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              padding: "20px",
              flexDirection: "column",
              boxSizing: "border-box",
            }}
            description={`I chose computer science because it’s the closest path to my goal of joining a cybersecurity team. 
I’m passionate about programming and enjoy solving problems, always asking, "What if I tried this?"

My curiosity started early, I loved tinkering with electronics as a kid, sometimes even breaking them just to see how they worked. Movies and shows about hackers also inspired me, though I soon realized real hacking is very different from what’s shown on screen.`}
            descStyle={{
              whiteSpace: "pre-line",
              display: "flex",
              color: "white",
              fontSize: "1.5rem",
              justifyContent: "center",
              fontFamily: "Inria Sans, sans-serif",
              textAlign: "center",
            }}
          />
        </div>
      </div>

      <div>
        <h1 className={aboutStyle.aboutHeader}>
          My Approach to Work and Growth
        </h1>

        <div className={aboutStyle.cardWrapper}>
          <Card
            style={{
              backgroundColor: "#444d63",
              height: "auto",
              width: "100%",
              maxWidth: "1210px",
              margin: "auto",
              gap: "50px",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              padding: "20px",
              flexDirection: "column",
              boxSizing: "border-box",
            }}
            description={`My work style mixes introverted and extroverted traits.
I start by observing and working independently but become more engaged over time.
I learn best by seeing and doing, experimenting and tinkering until I become content with it,
or until something works to my liking.

I enjoy collaborating, combining ideas to find better solutions with a team and make everyone feel included.
I’m improving my communication, as I sometimes struggle to express myself or speak up.
I handle pressure well, though sudden changes can overwhelm me and require time to process.`}
            descStyle={{
              whiteSpace: "pre-line",
              display: "flex",
              color: "white",
              fontSize: "1.5rem",
              justifyContent: "center",
              fontFamily: "Inria Sans, sans-serif",
              textAlign: "center",
            }}
          />
        </div>
      </div>
    </>
  );
}
