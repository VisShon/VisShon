import ExperienceCard from "../components/ExperienceCard"
import { useWindowSize } from "../utils/useWindowSize"
import { useState, useEffect } from "react"
import { motion,useMotionValueEvent, useScroll } from "framer-motion"
import experience from "../content/data/experince.json"


function Experiences() {

	const variants = {
		0:"h-[1208vh]",
		1:"h-[600vh]",
	}

	const AnimationVariants = {
		show: {
			opacity: 1,
			filter: "blur(0px)",
		},
		hide: {
			opacity: 0,
			blur: 1,
			filter: "blur(4px)",
		},
	}

	const [width] = useWindowSize()
	const [device, setDevice] = useState("")
	const [rotation,setRotation] = useState(0)

	const [index,setIndex] = useState(0)
	const [animation, setAnimate] = useState(false);


	const {scrollY} = useScroll()

	useMotionValueEvent(scrollY, "change", 
		(latest) => setRotation(prev=>prev+scrollY?.current/1000)
	)

	useEffect(()=>{
		if(width < 500)
			setDevice("SMALL")
		if(width <=1030 && width >=500)
			setDevice("MEDIUM")
		if(width >1030)
			setDevice("LARGE")
	},[width])


	return (
		<>
			<div className={`p-12 small:p-4 w-full font-mada bg-ivory text-charcoal select-none relative mb-[20vh] ${device==="SMALL"?variants[1]:variants[0]}` }>

				<div className="absolute flex flex-col items-center justify-start w-[50%] small:w-[40%] gap-20 z-20">
					{experience.slice(0,4).map((experience,index)=>
						<ExperienceCard 
							key={index}
							index={index}
							setCurrent={setIndex}
							setAnimate={setAnimate}
							logo={experience.image}
							device={device}
						/>
					)}
				</div>

				<div className="border-[1.5px] h-[80vh] small:h-[90vh] rounded-md  border-grey p-24 flex justify-end sticky top-20 small:top-10 small:p-4 ">

					<motion.div 
						className="w-[40%] small:w-[55%] flex flex-col small:h-[100%] justify-center items-start small:justify-start ease-in-out transition-all"
						variants={AnimationVariants} 
						animate={animation ? 'hide' : 'show'}
					>

						<a  
							className="font-[400] text-[3vw] leading-tight small:text-4xl mb-2"
							alt={experience[index]?.title}
							target="_blank"
											rel="noreferrer"
							href={experience[index]?.links[0].url}>
							{experience[index]?.title}	
						</a>

						<p  
							className="rounded-full border-[1.5px] border-grey py-1 px-2 small:px-1 small:py-0 w-fit mb-10 text-lg small:text-[0.65rem] small:tracking-tighter">
							{experience[index]?.date}
						</p>

						<div   
							className="flex flex-col gap-5 text-[1vw] small:text-[2vh] small:absolute small:bottom-[12vh] small:-right-4 small:px-4 small:w-[90vw]">
							{experience[index]?.descriptions.slice(0,3).map((description,id)=>
								<p key={id}>
									{description}
								</p>
							)}
						</div>

					</motion.div>

					<motion.img
						animate={{rotateZ:rotation}}
						className="absolute bottom-10 right-10 small:right-10"
						alt="Star"
						src="./icons/darkStar.svg"
					/>
				</div>

			</div>
		</>
	)
}

export default Experiences