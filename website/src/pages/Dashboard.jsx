import { useState } from "react"
import DashboardButton from "../components/DashboardButton"
import ScrollBanner from "../components/ScrollBanner"

function Dashboard() {

	const [dark, setDark] = useState(false)

	return (
		<div className="w-full h-screen relative font-mada font-[400]">

			<ScrollBanner 
				dark={true}
			/>
			
			<div className="grid grid-cols-9 grid-rows-8 gap-4 w-full p-5 h-[90%]">
				<DashboardButton
					index={0}
				/>
				<DashboardButton
					index={1}
				/>
				<DashboardButton
					index={2}
				/>
				<DashboardButton
					index={3}
				/>
				<DashboardButton
					index={4}
				/>
			</div>
		</div>
	)
}

export default Dashboard