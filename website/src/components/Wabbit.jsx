
import { useAnimate,useScroll,useSpring,useTransform,motion } from "framer-motion"
import { useEffect, useState } from "react"


function Wabbit() {
	const [scope, animate] = useAnimate()
	const [focus,setFocus] = useState(false)

	const { scrollY } = useScroll()
	const springScroll = useSpring(scrollY, {
		stiffness: 80,
		damping: 30,
		restDelta: 0.01,
	})

	const wabbitScroll = useTransform(springScroll,[0,1000],[0,-300])
	const wabbitBlur = useTransform(springScroll,[0,500],[0,7])

	const [blur,setBlur] = useState(wabbitBlur.current)
	wabbitBlur.onChange((current, value) => {setBlur(current)})

	const burstGum = () =>{
		setFocus(true)
		animate(
			".gum",
			{
				scale:0,
				x:-100
			},
			{repeat:0, ease: "easeInOut", duration:1}
		)
		
	}

	useEffect(() => {
		animate(
			".gum",
			{
				scale:[0.9,1.2,0.9],
				x:[-25,0,-25]
			},
			{repeat:Infinity, ease: "easeInOut", duration:20}
		)
	}, [animate])

	return (
		<div 
			className="large:w-[65vh] small:h-[80vh] absolute large:top-40 small:bottom-52 z-20 flex justify-start" 
			onClick={burstGum} 
			ref={scope}
		>
			<motion.img 
				className="relative z-10 w-[90%] object-contain"
				style={{
					y:wabbitScroll,
					filter:`blur(${blur}px)`
				}}
				alt="wabbit"
				src="./others/wabbit.png"
			/>

			{focus?
			<motion.img
				className="gum absolute top-[30%] right-0 z-20 w-[30%] cursor-pointer select-none"
				style={{
					y:wabbitScroll,
					filter:`blur(${blur}px)`
				}}
				alt="burst"
				src="/others/burstbubblegum.svg"
			/>:
			<motion.img
				className="gum absolute top-[30%] small:top-[33%] -right-2 z-20 w-[30%] cursor-pointer select-none"
				style={{
					y:wabbitScroll,
					filter:`blur(${blur}px)`
				}}
				alt="bubblegum"
				src="/others/bubblegum.svg"
			/>}
			
		</div>
	)
}

export default Wabbit