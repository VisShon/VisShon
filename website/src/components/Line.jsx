import { useScroll,useSpring,useTransform,motion } from "framer-motion"
function Line({children,base,index}) {
	const { scrollY } = useScroll()
	const springScroll = useSpring(scrollY, {
		stiffness: 80,
		damping: 30,
		restDelta: 0.01,
	})
	const textScroll = useTransform(springScroll,[500,1300],[base*2,0])
	const textOpacity = useTransform(springScroll,[0,1200],[0,1],{clamp: false})

	return (
		<motion.p 
			className="w-full"
			style={{
				x:textScroll,
				opacity:textOpacity
			}}
		>
			{children}
		</motion.p>
	)
}

export default Line