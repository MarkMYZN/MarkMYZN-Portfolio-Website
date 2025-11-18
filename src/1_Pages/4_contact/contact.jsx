import React from "react";
import styles from "./contact.module.css";
import { Link } from "react-router-dom";
import NavBar from "../../2_Components/1_navbar/navbar.jsx";
import Card from "../../2_Components/3_Card/card.jsx";

export default function Contact() {
	return (
		<>
			<title>Contact - Portfolio</title>
			<NavBar />

			<section className={styles.sect1}>
				<h1>You can reach me out here!</h1>
			</section>
			<section>
				<h4>(You can click on each to go to each platforms!)</h4>
			</section>

			<section className={styles.contactContainer}>
				<Link to="https://github.com/MarkMYZN">
					<Card
						className={styles.card}
						image="https://www.svgrepo.com/show/448225/github.svg"
						title="Github"
					/>
				</Link>

				<Link to="https://web.facebook.com/Kotomi.nana.18">
					<Card
						className={styles.card}
						image="https://www.svgrepo.com/show/448224/facebook.svg"
						title="Facebook"
					/>
				</Link>

				<Link to="mailto:markopsec.dev.main+Web_Portfolio@gmail.com">
					<Card
						className={styles.card}
						image="https://www.svgrepo.com/show/452213/gmail.svg"
						title="Gmail"
					/>
				</Link>

				<Link to="https://www.linkedin.com/in/mark-mostrales/">
					<Card
						className={styles.card}
						image="https://www.svgrepo.com/show/448234/linkedin.svg"
						title="LinkedIn"
					/>
				</Link>

				<Link to="https://www.reddit.com/user/MarkMYZN">
					<Card
						className={styles.card}
						image="https://www.svgrepo.com/show/452094/reddit.svg"
						title="Reddit"
					/>
				</Link>
			</section>
		</>
	);
}
