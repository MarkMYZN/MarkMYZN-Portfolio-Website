import React from "react";
import NavBar from "../../2_Components/1_navbar/navbar.jsx";
import Card from "../../2_Components/3_Card/card.jsx";
import homeStyles from "./home.module.css";

export default function Home() {
	return (
		<>
			<title>Home - Portfolio</title>
			<NavBar />

			<section className={homeStyles.sect1}>
				<section>
					<h1>Welcome To My Portfolio!</h1>
				</section>
				<section>
					<h2>Scroll down to check some of my projects below!</h2>
				</section>
			</section>

			<section className={homeStyles.sect2}>
				<Card className={homeStyles.card1} />
			</section>

			<section className={homeStyles.sect3}>
				<h1>Latest projects I've been working on:</h1>
			</section>

			<section className={homeStyles.container}>
				<Card
					className={homeStyles.card2}
					imageHandler={homeStyles.cardImg}
					textContainer={homeStyles.cardText}
					image="https://placehold.co/200x200"
					title="Portfolio Website"
					description="This is my Portfolio Website made in React-JSX."
				/>

				<Card
					className={homeStyles.card2}
					imageHandler={homeStyles.cardImg}
					textContainer={homeStyles.cardText}
					image="https://placehold.co/200x200"
					title="Parcel Dispatch"
					description="A 3D game made in Godot Game Engine, and is Work in Progress."
				/>
			</section>
		</>
	);
}
