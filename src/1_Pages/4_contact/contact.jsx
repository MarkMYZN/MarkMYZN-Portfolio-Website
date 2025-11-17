import React from "react";
import NavBar from "../../2_Components/1_navbar/navbar.jsx";
import styles from "./contact.module.css"; // optional CSS module

export default function Contact() {
	return (
		<>
			<title>Tech Picks - Portfolio</title>
			<NavBar />

			<div className={styles.container}>
				<div className={styles.card}>
					<h1>🚧 Page in Progress 🚧</h1>
					<p>We are working on this page. Please come back later!</p>
				</div>
			</div>
		</>
	);
}
