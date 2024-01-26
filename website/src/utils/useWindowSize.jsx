import { useEffect, useState } from "react"

export const useWindowSize = () => {
	const [width, setWidth] = useState(null)
	const [height, setHeight] = useState(null)

	useEffect(() => {
		setWidth(window.innerWidth)
		setHeight(window.innerHeight)

		window.addEventListener("resize", ()=>{
			setWidth(window.innerWidth)
			setHeight(window.innerHeight)
			return [width,height]
		})

		return () => window.removeEventListener("resize", ()=>{
			setWidth(window.innerWidth)
			setHeight(window.innerHeight)
			return [width,height]
		})
	}, [width,height])

	return [width,height]
}