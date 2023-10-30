import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Community from "./pages/Community";
import Project from "./pages/Project";
import Award from "./pages/Award";

import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>

		{/* <Navbar/> */}

		<Routes>
			<Route path="/" element={<Home/>} />
			<Route path="/dashboard" element={<Dashboard/>} />
			<Route path="/community/:id" element={<Community/>} />
			<Route path="/project/:id" element={<Project/>} />
			<Route path="/award/:id" element={<Award/>} />
		</Routes>

		<Footer />

	</BrowserRouter>
);
