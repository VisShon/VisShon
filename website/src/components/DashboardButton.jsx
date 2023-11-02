import {Link} from "react-router-dom"
import { motion } from "framer-motion"
import DashboardPopUp from './DashboardPopUp';

function DashboardButton({index,descp,title}) {

	const variants = {
		0:"col-span-3 row-span-4 bg-workBg",
		1:"col-span-6 row-span-4 col-start-4 bg-projectBg",
		2:"col-span-3 row-span-4 row-start-5 bg-communityBg",
		3:"col-span-3 row-span-4 col-start-4 row-start-5 bg-mentorshipBg",
		4:"col-span-3 row-span-4 col-start-7 row-start-5 bg-awardsBg",
	}

	return (
		<>
			<motion.div 
				className={`bg-no-repeat w-full h-full bg-cover ${variants[index]} rounded-3xl text-chalk flex flex-col items-end justify-between select-none cursor-pointer`}
				onClick={{}}
				style={{padding:"2rem"}}
				whileHover={{padding:"1.5rem"}}
			>

				<img 
					src="arrowWhite.svg"
				/>


				<p 
					className="w-[30rem] self-start"
				>
					{descp}
				</p>

				<h2 
					className="text-5xl self-start"
				>
					{title}
				</h2>
			</motion.div>

			<DashboardPopUp 
				bg={"./projectBg.png"}
			/>
		</>
	)
}

export default DashboardButton