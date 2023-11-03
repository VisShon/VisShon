import ReactDOM from "react-dom/client"
import { Route, Routes, BrowserRouter } from "react-router-dom"

import Navbar from "./components/Navbar"
import Avaibility from "./components/Navbar/Avaibility"
import Footer from "./components/Footer"
import Tabs from "./components/Navbar/Tabs"


import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Community from "./pages/Community"
import Project from "./pages/Project"
import Award from "./pages/Award"

import "./styles/index.css"
import ScrollContainer from "./components/ScrollContainer"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<BrowserRouter>

		<Avaibility/>
		<ScrollContainer>
			<Navbar/>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/dashboard" element={<Dashboard/>} />
				<Route path="/community/:id" element={<Community/>} />
				<Route path="/project/:id" element={<Project/>} />
				<Route path="/award/:id" element={<Award/>} />
			</Routes>
		</ScrollContainer>

		{/* <Footer /> */}
		{/* <Tabs /> */}

	</BrowserRouter>
)
