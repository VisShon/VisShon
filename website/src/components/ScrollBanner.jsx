import { motion } from "framer-motion"
import { useState,useEffect } from "react"


function ScrollBanner({bg,bgColor,bottom}) {

	const [progress, setProgress] = useState(0)

	useEffect(() => {
		const intervalId = setInterval(() => {
				setProgress((prevProgress) => prevProgress + 1)
		},10)
		return () => clearInterval(intervalId)
	}, [progress])

	const variants ={
		0:"absolute -bottom-20",
		1:"relative",
	}


	return (
		<motion.div 
			className={`w-full h-[5rem] ${bottom?variants[0]:variants[1]} bg-repeat-x`} 
			style={{
				backgroundPositionX:progress+"px"

			}}
			animate={{
				backgroundImage:bg,
				backgroundColor:bgColor,
			}}
			transition={{
				dduration: 0.5,
				ease:"easeInOut",
			}}
		>
		</motion.div>
	)
}

export default ScrollBanner