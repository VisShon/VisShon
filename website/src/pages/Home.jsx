import Hero from "../layouts/Hero"
import Introduction from "../layouts/Introduction"
import Experiences from "../layouts/Experiences"
import Projects from "../layouts/Projects"
import Ethics from "../layouts/Ethics"
import SkillsTools from "../layouts/SkillsTools"
import Reviews from "../layouts/Reviews"
import Dashboard from "../layouts/Dashboard"

import Loading from "../components/Loader/index"

import { useRef, useState, useEffect } from "react"
import {animate } from "framer-motion"

function Home() {

	const options= [
		"Are you more inclined towards creating intuitive user interfaces or robust backend systems?",
		"Do you thrive on crafting seamless user experiences or enjoy the challenge of optimizing server performance?",
		"Are you drawn towards the creative side of development or do you revel in the intricacies of data management?",
		"Do you find joy in building entire applications from scratch or are you passionate about refining existing systems?",
		"Are you excited about the frontend magic that brings a website to life or are you more intrigued by the backend's hidden complexities?",
	]

	const [progress, setProgress] = useState(0)
	const [intervalTime, setIntervalTime] = useState(100)
	const [urlPath, setUrlPath] = useState(window.location.pathname.slice(1).toLowerCase())

	const quote = useRef(options[Math.floor(Math.random() * 4)]) 

	const closeLoader = () => animate(".loader",{opacity:[1,0]},{duration:1.5, ease:"easeOut" })

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (progress >= 100){
				clearInterval(intervalId)
				closeLoader()
			}
			else {
				setProgress((prevProgress) => prevProgress + 1)
				if (progress % 10 === 0 && progress !== 0)
				   setIntervalTime((prevTime) => prevTime / 2)
			}
		}, intervalTime)
 
		return () => clearInterval(intervalId)
	}, [progress,intervalTime])


	useEffect(() =>
		setUrlPath(window.location.pathname.slice(1).toLowerCase()), 
	[])


	return (
		<>
			
			{
				progress!==100&&
				<Loading
					progress={progress}
					quote={quote}
				/>
			}

			{
				urlPath==="dashboard"?
				<Dashboard/>:
				<main className="flex bg-ivory flex-col items-center relative  w-screen h-fit overflow-x-clip overscroll-contain snap-y snap-scroll-points z-20 mb-[100vh]">
					<Hero/>
					<Introduction/>
					<Experiences/>
					<Ethics/>
					<Projects/>
					<SkillsTools/>
					<Reviews/>
				</main>
			}


			<div className="loader"></div>
		</>
	)
}

export default Home