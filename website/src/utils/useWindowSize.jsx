import { useEffect, useState } from "react"

export const useWindowSize = () => {
	const [width, setWidth] = useState(null)
	const [height, setHeight] = useState(null)

	const handleResize = () => {
		setWidth(window.innerWidth)
		setHeight(window.innerHeight)
		return [width,height]
	}

	useEffect(() => {
		handleResize()
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [window.innerWidth])

	return [width,height]
}