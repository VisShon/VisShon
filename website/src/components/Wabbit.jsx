import { useAnimate,useScroll,useSpring,useTransform,motion } from "framer-motion"
import { useEffect, useState } from "react"


function Wabbit() {
	const [scope, animate] = useAnimate()
	const [focus,setFocus] = useState(false)
	const audio = new Audio("./music.mp3")
	
	const { scrollY } = useScroll()
	const springScroll = useSpring(scrollY, {
		stiffness: 80,
		damping: 30,
		restDelta: 0.01,
	})

	const wabbitScroll = useTransform(springScroll,[100,800],[0,-200])
	const wabbitBlur = useTransform(springScroll,[50,500],[0,8])

	const [blur,setBlur] = useState(wabbitBlur.current)
	wabbitBlur.onChange((current, value) => {setBlur(current)})

	const burstGum = async() =>{

		if (audio.paused) {
			setFocus(true)
			await animate(
				".gum",
				{
					scale:0,
					x:-100
				},
				{repeat:0, ease: "easeInOut", duration:1}
			)
			await audio.play()
		} 			
		
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
		<motion.div 
			style={{
				y:wabbitScroll,
				filter:`blur(${blur}px)`
			}}
			className="large:w-[70vh] small:h-[80vh] absolute large:top-64 small:bottom-32 z-20 flex justify-start small:-ml-[10%]" 
			onClick={burstGum} 
			ref={scope}
		>
			<img 
				className="relative z-10 w-[90%] small:w-full object-contain drop-shadow-lg"
				alt="wabbit"
				src="./others/wabbit.webp"
			/>

			{focus?
			<img
				className="gum absolute top-[30%] right-0 z-20 w-[30%] cursor-pointer select-none drop-shadow-lg"
				alt="burst"
				src="/others/burstbubblegum.svg"
			/>:
			<img
				className="gum absolute top-[30%] small:top-[26vh] -right-2 small:-right-12  z-20 w-[30%] cursor-pointer select-none drop-shadow-lg"
				alt="bubblegum"
				src="/others/bubblegum.svg"
			/>}
			
		</motion.div>
	)
}

export default Wabbit