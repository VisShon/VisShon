import ReactDOM from "react-dom/client"
import { Route, Routes, BrowserRouter } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Tabs from "./components/Navbar/Tabs"


import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"

import "./styles/index.css"
import ScrollContainer from "./components/ScrollContainer"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<BrowserRouter>
	
		<ScrollContainer>
			<Navbar/>
			<Routes>
				<Route path="/" element={<Home/>} />
				<Route path="/dashboard" element={<Dashboard/>} />
			</Routes>
		</ScrollContainer>

		{/* <Footer /> */}
		{/* <Tabs /> */}

	</BrowserRouter>
)
