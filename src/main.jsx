import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Home from "./1_Pages/1_Home/home.jsx";
import About from "./1_Pages/2_about/about.jsx";
import Skills from "./1_Pages/3_skills/skills.jsx";
import Contact from "./1_Pages/4_contact/contact.jsx";
import Recommendations from "./1_Pages/5_Recommendations/recomms.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/tech-picks" element={<Recommendations />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</HashRouter>
	</StrictMode>
);
