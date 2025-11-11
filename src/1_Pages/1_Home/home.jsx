import React from "react";
import NavBar from "../../2_Components/1_navbar/navbar.jsx";
import Card from "../../2_Components/3_Card/card.jsx";
import homeStyles from "./home.module.css";

function Home() {
  return (
    <>
      <title>MarkOpSec's Portfolio Website</title>
      <NavBar />
      <div className={homeStyles.homepage}>
        <h1>Welcome To My Portfolio!</h1>
        <h2>Scroll down to check some of my projects below!</h2>
      </div>

      {/* Separator line */}
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}>
        <Card
          style={{
            width: "1200px",
            height: "5px",
            borderRadius: "15px",
            backgroundColor: "#99aab5",
            marginTop: "250px",
            marginBottom: "25px",
          }}
        />
      </div>

      {/* Projects Header */}
      <div className={homeStyles.projHeader}>
        <h1>Latest projects i've been working on:</h1>

        {/* Projects Cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            textAlign: "left",
          }}>
          {/* Card 1 */}
          <Card
            style={{
              display: "flex", // make card content a flex container
              flexDirection: "row", // stack image, title, description
              backgroundColor: "#444d63",
              border: "1px solid #4a4c51",
              borderRadius: "15px",
              color: "white",
              width: "90%",
              height: "auto",
              padding: "10px",
              maxWidth: "1000px",
              alignItems: "center",
              fontFamily: "Inria Sans, sans-serif",
            }}
            title="Portfolio Website"
            titleStyle={{
              fontSize: "2rem",
              marginBottom: "auto",
            }}
            description="My personal portfolio website to showcase my skills and projects."
            image="public\assets\web_pic.png"
            imageStyle={{
              width: "15%",
              borderRadius: "5px",
              marginBottom: "auto",
              marginRight: "20px",
            }}></Card>

          {/* Card 2 */}
          <Card
            style={{
              display: "flex", // make card content a flex container
              flexDirection: "row", // stack image, title, description
              backgroundColor: "#444d63",
              border: "1px solid #4a4c51",
              borderRadius: "15px",
              color: "white",
              width: "90%",
              height: "auto",
              padding: "10px",
              maxWidth: "1000px",
              alignItems: "center",
              fontFamily: "Inria Sans, sans-serif",
            }}
            title="Parcel Dispatch"
            titleStyle={{
              fontSize: "2rem",
              marginBottom: "auto",
            }}
            description="My hobby 3D Game inspired from my First ever job. (Work in progress!)"
            image="react"
            imageStyle={{
              width: "15%",
              borderRadius: "5px",
              marginBottom: "auto",
              marginRight: "20px",
            }}></Card>
        </div>
      </div>
    </>
  );
}

export default Home;
