import ReactDOM from "react-dom/client"

import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import "./styles/index.css"
import { ReactLenis } from '@studio-freight/react-lenis'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
	<>
		<ReactLenis 
			options={{
				smoothWheel: true,
				duration: 5,
				lerp:0.03,
				easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			}} 
			root={root}>
			<Navbar/>
			<Home/>
			<Footer/>
		</ReactLenis>
	</>
)
