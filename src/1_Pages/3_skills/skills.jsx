import React from "react";
import NavBar from "../../2_Components/1_navbar/navbar.jsx";
import skillsStyles from "./skills.module.css";
import Card from "../../2_Components/3_Card/card.jsx";

export default function Skills() {
	return (
		<>
			<title>Skills - Portfolio</title>
			<NavBar />
			<section className={skillsStyles.headTxt}>
				<h1> I have Skills in:</h1>
			</section>
			{/* i dont know why i added this section anyway lol */}
			{/* <section>
				<h5>
					(These are ranked from most preferred to least preferred language.)
				</h5>
			</section> */}

			<section className={skillsStyles.skillContainer}>
				<Card
					className={skillsStyles.card}
					image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
					title="C/C++"></Card>

				<Card
					className={skillsStyles.card}
					image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
					title="Java"></Card>

				<Card
					className={skillsStyles.card}
					image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
					title="Python"></Card>

				<Card
					className={skillsStyles.card}
					image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
					title="React"></Card>

				<Card
					className={skillsStyles.card}
					image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
					title="HTML"></Card>

				<Card
					className={skillsStyles.card}
					image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
					title="CSS"></Card>

				<Card
					className={skillsStyles.card}
					image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg"
					title="GDScript"></Card>
			</section>
		</>
	);
}
