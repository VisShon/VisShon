import {Link} from "react-router-dom"
import { motion } from "framer-motion"
import { useState } from "react"
import Line from "../components/Line"


function Introduction() {

	const [rotation,setRotation] = useState(0)


	return (
		<div className="flex justify-center items-end font-mada p-32  text-charcoal select-none relative gap-40 h-[90vh]">

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
							src="./others/star.svg"
						/>
						<p className="w-[40%] text-right">
							I am proficient with 
							DevOps, Blockchain, 
							Web Dev and UI/UX.
						</p>
					</div>
				</div>
			</div>

			<div className="text-[32px] w-[50%] flex flex-col items-end leading-snug relative">


				<Line index={1} base={-20}>Driven by a passion for crafting innovative</Line>
				<Line index={2} base={-40}>solutions, I apply a highly methodical</Line>
				
				<section className="relative w-[100%] flex justify-start items-center gap-2 -mt-2">
					<img
						className="hover:scale-105 transition-all ease-in-out select-none" 
						src="./others/introPhoto.png"
					/>
					<div>
						<Line index={3} base={80}>approach to product development.</Line>
						<Line index={4} base={60}>over time, my journey has unfolded</Line>
						<Line index={5} base={40}>with a diverse array of experiences</Line>
						<Line index={6} base={20}>working with various startups to</Line>
					</div>
				</section>

				<Line
				 	index={7} 
					base={-60}
				>
					leading successfull ‎ 
					<Link 
						className="relative hover:text-[#CCCFD4] transition-all underline" 
						target="_blank"
						to="https://inc42.com/buzz/meet-the-31-web3-startups-that-are-part-of-first-cohort-of-polygonleap-2021/">
						fundraising
					</Link>
					‎ efforts. 
				</Line>

				<Line index={7} base={-80}>Beyond developing solutions, I am committed</Line>
				<Line index={8} base={-100}>to fostering developer and designer</Line>
				<Line index={9} base={-120}>communities and leading with a vision for a</Line>
				<Line index={10} base={-140}>tech-driven future.</Line>
			</div>
		</div>
	)
}

export default Introduction