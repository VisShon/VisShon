import { TypeAnimation } from "react-type-animation"
import { useScroll,useSpring,useTransform,motion } from "framer-motion"
import { useState } from "react"

function Title() {

	const { scrollY } = useScroll()
	const springScroll = useSpring(scrollY, {
		stiffness: 100,
		damping: 20,
		restDelta: 0.01,
	})
	const titleBlur = useTransform(springScroll,[0,500],[0,7])

	const [blur,setBlur] = useState(titleBlur.current)
	titleBlur.onChange((current, value) => {setBlur(current)})

	const titleScroll = useTransform(springScroll,[0,800],[0,-50])

	return (
		<div className="flex flex-col justify-start items-center small:items-start w-full small:px-5 small:mt-24 small:-ml-4 h-[11.5vw] small:h-[20vh] mb-8 small:-mb-12">
			
			<motion.h2 
				className="font-[400] text-4xl my-2 small:my-0  small:text-2xl small:-mb-4"
				style={{
					filter:`blur(${blur}px)`
				}}>
				FULL STACK
			</motion.h2>

			<motion.div 
				className="w-full flex justify-center small:justify-start items-center small:items-start h-full"
				style={{
					y:titleScroll,
				}}>
				<TypeAnimation
					sequence={[
						"DEVELOPER",
						60000, 
						"INNOVATOR",
						60000, 
						"DESIGNER",
						60000, 
					]}
					cursor={false}
					preRenderFirstString={true}
					speed={150}
					className="font-luimp italic font-[400] text-[14vw] small:text-[9.5vh] text-charcoal tracking-[-13px] small:tracking-[-6px] text-center small:text-left small:-ml-2"
					repeat={Infinity}
				/>
			</motion.div>
		</div>
	)
}

export default Title