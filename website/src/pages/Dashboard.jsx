import { useState } from "react"
import DashboardButton from "../components/DashboardButton"
import ScrollBanner from "../components/ScrollBanner"

function Dashboard() {

	const [bg, setBg] = useState("DARK")

	const bgVariants = {
		DARK:"bg-charcoal",
		LIGHT:"bg-chalk"
	}

	return (
		<div className={`w-full h-screen relative font-mada font-[400] ${bgVariants[bg]}`}>

			<ScrollBanner 
				dark={!(bg=="DARK")}
			/>
			
			<div className="grid grid-cols-9 grid-rows-8 gap-4 w-full p-5 h-[90%] relative">
				<DashboardButton
					index={0}
					descp="Vishnu has held roles as a Frontend Developer at various organizations, showcasing expertise in creating user-centric interfaces. Additionally, he has contributed as a UI Designer, demonstrating versatility in design domains"
					link=""
					title="WORK ARCHIVE"
				/>
				<DashboardButton
					index={1}
					descp="Played pivotal roles in various leadership positions, including Club Coordinator for Google Developer Student Club IIITD, Convener of the 1Pixel Design Conference '22, Creative Lead for Odyssey IIITD '22, and active involvement in the organizing committee for Winterlude Dev Fest '22, showcasing a commitment to fostering tech communities and events."
					link=""
					title="COMMUNITY WORK"
				/>
				<DashboardButton
					index={2}
					descp="Through various mentorship roles, I've had the privilege of guiding and inspiring students in their tech journeys. Whether as a Cloud Facilitator, Student Mentor, or Teaching Assistant, I've contributed to fostering a culture of learning and innovation."
					link=""
					title="MENTORSHIP"
				/>
				<DashboardButton
					index={3}
					descp="Recipient of esteemed awards, including Pool Winner at the Polygon Buidlit Hackathon and Bounty Winner at the Ethereum India Hackathon, showcasing a proven track record of innovation and excellence in the tech space"
					link=""
					title="AWARDS"
				/>
				<DashboardButton
					index={4}
					descp="Vishnu has contributed to a range of impactful projects, spanning from educational applications to mental health chatbots. His portfolio showcases a diverse skill set in developing user-friendly and innovative solutions."
					link=""
					title="PROJECT ARCHIVES"
				/>
			</div>


		</div>
	)
}

export default Dashboard