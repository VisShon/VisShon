import {Link} from "react-router-dom"
import { motion } from "framer-motion"
import { useState } from "react"
import Line from "../components/Line"


function Introduction() {

	const [rotation,setRotation] = useState(0)


	return (
		<div className="flex small:flex-col justify-center items-start small:items-center font-mada p-32 small:px-12 pt-64 text-charcoal select-none relative gap-40 small:gap-10 h-screen ">

			<div className="w-[30%] h-full relative small:w-[60vw]">
				<div className="sticky top-0 h-[65%] flex flex-col justify-start small:items-center gap-5 small:gap-0">
					<h1 
						className="font-luimp italic font-[400] small:text-[12vh] text-9xl leading-[7rem] small:leading-none text-charcoal text-right ">
						Vishnu Shon
					</h1>
					
					<div className="flex justify-end text-sm small:hidden">
						<motion.img
							onMouseEnter={()=>setRotation(rotation=>rotation+30)}
							onMouseLeave={()=>setRotation(rotation=>rotation+30)}
							onClick={()=>setRotation(rotation=>rotation+30)}
							animate={{rotateZ:rotation}}
							className="w-[15%] small:w-[8vh]"
							src="./others/star.svg"
						/>
						<section className="text-right ml-5">
							<p>I am proficient with </p>
							<p>DevOps, Blockchain,</p> 
							<p>Web Dev and UI/UX.</p>
						</section>
					</div>
				</div>
			</div>

			<div className="text-3xl small:text-[1.8vh] w-[50%] small:w-auto flex flex-col items-end small:items-center leading-snug relative">

				<Line index={1} base={-20}>Driven by a passion for crafting innovative</Line>
				<Line index={2} base={-40}>solutions, I apply a highly methodical</Line>
				
				<section className="relative w-full flex justify-start items-center gap-2 -mt-2 small:-mt-0">
					<img
						className="hover:scale-105 transition-all ease-in-out select-none small:w-[20%]" 
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