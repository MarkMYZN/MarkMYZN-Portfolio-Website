import React from "react";
import NavBar from "../../2_Components/1_navbar/navbar.jsx";
import skillsStyles from "./skills.module.css";
import Card from "../../2_Components/3_Card/card.jsx";

export default function Skills() {
  const skills = [
    {
      title: "C/C++",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    },
    {
      title: "Java",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
    },
    {
      title: "React JSX",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      title: "Python",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
    },
    {
      title: "CSS",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
    },
    {
      title: "HTML",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    },
    {
      title: "GDScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg",
    },
  ];

  return (
    <>
      <title>MarkOpSec's Skills</title>
      <NavBar />
      <div>
        <h1 className={skillsStyles.skillHeader}>My Skills</h1>

        <div className={skillsStyles.gridContainer}>
          {skills.map((skill, index) => (
            <Card
              key={index}
              style={{
                flexDirection: "column",
                display: "flex",
                padding: "20px",
                height: "400px",
                width: "250px",
                borderRadius: "15px",
                textAlign: "center",
                gap: "10px",
                backgroundColor: "#444d63",
              }}
              image={skill.image}
              imageStyle={{
                alignSelf: "center",
                width: "250px",
                borderRadius: "5px",
                marginBottom: "50px",
              }}
              title={skill.title}
              titleStyle={{
                fontSize: "2rem",
                marginBottom: "auto",
                marginTop: "30px",
                color: "white",
                fontFamily: "Inria Sans, sans-serif",
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
