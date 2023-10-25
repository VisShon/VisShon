import { useEffect } from "react"
import { useSpring } from "framer-motion"

const useIntersectionObserver = ( target, customThreshold = [0], customRoot = null ) => {

	const springPhysics = { damping: 40, friction: 10 }
	const springValue = useSpring(0, springPhysics)

	useEffect(() => {
		const observerCallback = ([entry]) => {
			if (entry.isIntersecting) {
				springValue.set(entry.intersectionRatio)
			}
		}

		const observerOptions = {
			root: customRoot,
			rootMargin: "0px 0px 0px 0px",
			threshold: customThreshold
		}

		const observer = new IntersectionObserver(
			observerCallback,
			observerOptions
		)

		observer.observe(target.current)
		return () => observer.disconnect()

	}, [target, customThreshold, customRoot, springValue])

  return { springValue }
}

export default useIntersectionObserver
