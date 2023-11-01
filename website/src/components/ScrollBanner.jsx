import { useScroll,useSpring,useTransform,motion, useMotionValue } from "framer-motion"

function ScrollBanner({bg,onScroll,dark}) {

	const bannerBgPos = useMotionValue(0)

	return (
		<div 
			className="w-full h-[5rem] bg-repeat-x bg-center" 
			style={
				dark?
				{backgroundImage:"url(./bannerDark.svg",backgroundColor:"#1F1F1F"}:
				{backgroundImage:"url(./bannerLight.svg)",backgroundColor:"#F4F9FF"}
			}
		>
		</div>
	)
}

export default ScrollBanner