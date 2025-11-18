import React from "react";
import NavBar from "../../2_Components/1_navbar/navbar.jsx";
import aboutStyle from "./about.module.css";
import Card from "../../2_Components/3_Card/card.jsx";

export default function About() {
	return (
		<>
			<title>About Me - Portfolio</title>
			<NavBar />

			<section className={aboutStyle.aboutHeader}>
				<h1>From Curiosity to Code: My Career Choice</h1>
			</section>

			<section>
				<Card
					className={aboutStyle.cardContainer1}
					description={`I chose computer science because it’s the closest path to my goal of joining a cybersecurity team.
                      I’m passionate about programming and enjoy solving problems, always asking, "What if I tried this?"
                      My curiosity started early, I loved tinkering with electronics as a kid, sometimes even breaking them just to see how they worked.
                      Movies and shows about hackers also inspired me, though I soon realized real hacking is very different from what’s shown on screen.`}
				/>
			</section>

			<section className={aboutStyle.aboutHeader}>
				<h1>My Approach to Work and Growth</h1>
			</section>

			<section>
				<Card
					className={aboutStyle.cardContainer2}
					description={`My work style mixes introverted and extroverted traits.
                      I start by observing and working independently but become more engaged over time.
                      I learn best by seeing and doing, experimenting and tinkering until I become content with it,
											or until something works to my liking.

                      I enjoy collaborating, combining ideas to find bettersolutions with a team
											and make everyone feel included. I’m improving my communication,
											as I sometimes struggle to express myself or speak up. I handle pressure well, though
											sudden changes can overwhelm me and require time to process.`}
				/>
			</section>
		</>
	);
}
