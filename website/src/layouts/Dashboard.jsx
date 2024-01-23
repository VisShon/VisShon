import { useState } from "react"
import { motion } from "framer-motion" 

import DashboardButton from "../components/DashboardButton"
import ScrollBanner from "../components/ScrollBanner"

import experience from "../content/data/experince.json"
import community from "../content/data/community.json"
import projects from "../content/data/project.json"
import mentorship from "../content/data/mentorship.json"
import awards from "../content/data/awards.json"

function Dashboard({status,setStatus}) {

	const [bg, setBg] = useState({
		image:"url(./others/bannerLight.svg)",
		color:"#F4F9FF"
	})


	return (
		status=="VISIBLE"&&
		<motion.div 
			className="w-full h-screen font-mada font-[400] z-50 sticky top-0 over flex flex-col justify-center items-center"
			animate={{
				backgroundColor:bg=="#1F1F1F"?"#F1EFF4":"#1F1F1F",
				opacity:status=="VISIBLE"?1:0,
			}}
			transition={{
				duration:1,
				ease:"easeInOut",
			}}
		>

			<ScrollBanner 
				bg={bg.image}
				bgColor={bg.color}
			/>
			
			<div 
				className="grid grid-cols-9 grid-rows-8 gap-4 w-full p-5 small:p-2 h-[90%] relative small:flex small:flex-col small:overflow-y-scroll"
			>
				<DashboardButton
					index={0}
					descp="Vishnu has held roles as a Frontend Developer at various organizations, showcasing expertise in creating user-centric interfaces. Additionally, he has contributed as a UI Designer, demonstrating versatility in design domains"
					title="WORK ARCHIVE"
					setBg={setBg}
					data={experience}
				/>
				<DashboardButton
					index={1}
					descp="Played pivotal roles in various leadership positions, including Club Coordinator for Google Developer Student Club IIITD, Convener of the 1Pixel Design Conference '22, Creative Lead for Odyssey IIITD '22, and active involvement in the organizing committee for Winterlude Dev Fest '22, showcasing a commitment to fostering tech communities and events."
					title="COMMUNITY WORK"
					setBg={setBg}
					data={community}
				/>
				<DashboardButton
					index={2}
					descp="Through various mentorship roles, I've had the privilege of guiding and inspiring students in their tech journeys. Whether as a Cloud Facilitator, Student Mentor, or Teaching Assistant, I've contributed to fostering a culture of learning and innovation."
					title="MENTORSHIP"
					setBg={setBg}
					data={mentorship}
				/>
				<DashboardButton
					index={3}
					descp="Recipient of esteemed awards, including Pool Winner at the Polygon Buidlit Hackathon and Bounty Winner at the Ethereum India Hackathon, showcasing a proven track record of innovation and excellence in the tech space"
					title="AWARDS"
					setBg={setBg}
					data={awards}
				/>
				<DashboardButton
					index={4}
					descp="Vishnu has contributed to a range of impactful projects, spanning from educational applications to mental health chatbots. His portfolio showcases a diverse skill set in developing user-friendly and innovative solutions."
					title="PROJECT ARCHIVES"
					setBg={setBg}
					data={projects}
				/>
			</div>

			

			<motion.button 
				className="bg-ivory fixed bottom-10 p-4 z-20 rounded-full hover:opacity-100 opacity-40 transition-all ease-in-out duration-200 small:opacity-100 "
				whileHover={{opacity:1}}
				onClick={()=>setStatus(false)} 
			>
				<img 
					src="./icons/cross.svg"
				/>
			</motion.button>


		</motion.div>
	)
}

export default Dashboard