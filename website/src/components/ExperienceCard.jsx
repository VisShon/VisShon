import { useScroll,useSpring,useTransform,motion } from "framer-motion"
import { useRef } from "react";


function ExperienceCard() {

	const containerRef = useRef(null)

	const { scrollY } = useScroll({
		target: containerRef,
		offset: ["end end", "start start"]
	});

	const springScroll = useSpring(scrollY, {
		stiffness: 80,
		damping: 30,
		restDelta: 0.01,
	})
	const logoScroll = useTransform(springScroll,[0,1000],[0,-40],{clamp:false})
	
	return (
		<div 
			className="flex flex-col justify-center items-center relative w-full h-[20%] p-2" 
			ref={containerRef}
		>
			<motion.img 
				className="absolute"
				style={{y:logoScroll}}
				src="./mathworks.png"
			/>

			<img 
				className="w-full rounded-md h-full"
				src="./mathworksBG.png"
			/>

		</div>
	)
}

export default ExperienceCard