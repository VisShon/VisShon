import { motion } from "framer-motion"
import { useState,useEffect } from "react"
import { useWindowSize } from "../utils/useWindowSize"
import ProjectPopUp from './ProjectPopUp';

function PopUpTile({index,title,descriptions,item,bg}) {

	const [isOpen,setIsOpen] = useState(false)
	const [isHover,setIsHover] = useState(false)
	const [width] = useWindowSize()
	const [device, setDevice] = useState("")

	useEffect(()=>{
		if(width < 500)
			setDevice("SMALL")
		if(width <=1030 && width >=500)
			setDevice("MEDIUM")
		if(width >1030)
			setDevice("LARGE")
	},[width])	

	const CircleVariants ={
		"DEFAULT":{
			width:"4vw",
			height:"4vw",
			borderRadius:"10rem"
		},
		"HOVER":{
			width:"99%",
			height:"100%",
			borderRadius:"1rem"
		},
	}

	const TextVariants ={
		"DEFAULT":{
			color:"#1F1F1F"
		},
		"HOVER":{
			color:"#F4F9FF"
		},
	}


	return (
		<>
			<div 
				className="relative flex border-b-[1.5px] justify-center border-charcoal  gap-10 w-full items-center cursor-pointer bg-contain h-[12vh]"
				onClick={()=>setIsOpen(true)}
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
				style={index===0?{borderTop:"1.5px solid"}:{borderTop:"0px solid"}}
			>
				{device!=="SMALL"&&
				<motion.img 
					className="absolute w-full h-full left-0 object-cover mx-2 z-0"
					alt={title}
					animate={isHover?CircleVariants["HOVER"]:CircleVariants["DEFAULT"]}
					transition={{
						duration:0.5,
						ease:"easeInOut",
						type: "spring",
					}}
					src={bg}
				/>}

				<motion.div 
					className="w-full h-full px-10 small:px-5 pl-[8%] small:pl-5  flex justify-start items-center z-10  gap-10"
					animate={isHover?TextVariants["HOVER"]:TextVariants["Default"]}
				>
					<h2 
						className="text-[1.8vw]  leading-tight font-[300] text-left w-[25%] small:w-[50%] small:text-base">
						{title}
					</h2>

					<div 
						className="w-[70%] small:text-[1.1vh] text-[0.75vw] ">
						<p>{descriptions?.at(0).slice(0,1000)}</p>
						{
							device!=="SMALL"&&
							(descriptions?.at(0).length<400?
								<p>{descriptions?.at(1)}</p>:
								<></>)
						}
					</div>

				</motion.div>
			</div>
			
			<ProjectPopUp
				project={item}
				setIsOpen={setIsOpen}
				isOpen={isOpen}
			/>
		</>
	)
}

export default PopUpTile