import {Link} from "react-router-dom"
import { useState } from "react"
import { motion } from "framer-motion"


function Introduction() {

	const [rotation,setRotation] = useState(0)

	return (
		<div className="flex justify-center items-start font-mada p-32  text-charcoal select-none relative gap-40 h-[80vh]">

			<div className="w-[20%] h-full relative">
				<div className=" sticky top-0 h-[65%]  flex flex-col justify-start ">
					<h1 
						className="font-luimp italic font-[400] text-8xl leading-[6rem] text-charcoal text-right capitalize">
						Vishnu Shon
					</h1>
					
					<div className="flex justify-end text-sm">
						<motion.img
							onMouseEnter={()=>setRotation(rotation=>rotation+30)}
							onMouseLeave={()=>setRotation(rotation=>rotation+30)}
							animate={{rotateZ:rotation}}
							className="w-[15%]"
							src="./star.svg"
						/>
						<p className="w-[40%] text-right">
							I am proficient with 
							DevOps, Blockchain, 
							Web Dev and UI/UX.
						</p>
					</div>
				</div>
			</div>

			<div className="text-[32px] w-[35%] leading-snug justify-self-start inline-block">
				Driven by a passion for crafting innovative solutions,  
				I apply a highly methodical time, my journey has unfolded
				with a diverse

				<div className="flex gap-2 items-end h-fit overflow-hidden w-[90%]">
					<img 
						className="object-fill inline-block h-[120px]"
						src="./photo.png"
					/>
					<p >
						array of experiences, working with various startups leading 
						successfull ‎ 
						<Link 
							className="relative hover:text-[#CCCFD4] transition-all underline" 
							target="_blank"
							to="https://inc42.com/buzz/meet-the-31-web3-startups-that-are-part-of-first-cohort-of-polygonleap-2021/">
							fundraising
						</Link>
						‎ efforts. 
					</p>
				</div>

				Beyond developing solutions, I am committed 
				to fostering developer and designer communities and leading with a vision 
				for a tech-driven future.
			</div>
		</div>
	)
}

export default Introduction