import { useScroll,useSpring,useTransform,motion } from "framer-motion"
import { useRef } from "react"

function ScrollBanner() {

	const containerRef = useRef(null)

	const { scrollY } = useScroll({
		target: containerRef,
		offset: ["end end", "start start"]
	})

	const springScroll = useSpring(scrollY, {
		stiffness: 80,
		damping: 30,
		restDelta: 0.01,
	})

	const bannerScroll = useTransform(
		springScroll,
		[0,1000],
		[0,-40],
		{clamp:false}
	)

	return (
		<div className="flex gap-10 items-center justify-center font-mada font-[400] text-5xl capitalize w-screen overflow-clip h-[10%]" ref={containerRef}>
			<img 
				style={{x:bannerScroll}}
				src="./banner.svg"
			/>
		</div>
	)
}

export default ScrollBanner