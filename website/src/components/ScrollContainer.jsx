import  { useState, useRef, useCallback, useLayoutEffect, useEffect } from "react"
import { useMotionValue, useSpring, motion } from "framer-motion"
import ResizeObserver from "resize-observer-polyfill"
  
const ScrollContainer = ({ children }) => {

	const [contentHeight, setContentHeight] = useState(window.innerHeight)
	const scrollContainerRef = useRef(null)

	const springPhysics = { damping: 40, friction: 10 }
	const scrollYmotionValue = useMotionValue(-window.scrollY)
	const scrollYtransition = useSpring(scrollYmotionValue, springPhysics)

	const getContentHeight = useCallback((entries) => {
		for (let entry of entries) {
			const entryHeight = entry.contentRect.height
			setContentHeight(entryHeight)
		}
	}, [])

	useLayoutEffect(() => {
		const scrollContainer = scrollContainerRef.current

		let resizeObserver = new ResizeObserver((entries) =>
			getContentHeight(entries)
		)

		resizeObserver.observe(scrollContainer)

		return () => resizeObserver.disconnect()
	}, [getContentHeight])

	useEffect(() => {
		const trackScroll = () => {
			scrollYmotionValue.set( -window.scrollY)
		}

		window.addEventListener("scroll", trackScroll)

		return () => window.removeEventListener("scroll", trackScroll)
	}, [scrollYmotionValue])

	return (
	<>
		<motion.div
			ref={scrollContainerRef}
			style={{ y: scrollYtransition }}
			className="fixed min-h-[200vh] left-0 right-0 flex flex-col w-screen will-change-transform justify-start items-center relative-transform"
		>
			{children}
		</motion.div>

		<div style={{ height: contentHeight }} />
	</>
	)
}
  
export default ScrollContainer
  