import { useTransform,motion } from "framer-motion"
import { useState } from "react"


function StarCircle({index, diameter, star,scrollY}) {

	const leftTransition = useTransform(scrollY,[0,0.45,0.6],[-100*index,(index-1)*72.72-600/diameter,(index-1)*72.72-20*diameter])
	const scaleTransition = useTransform(scrollY,[0.2,0.45,0.6],[10*diameter,20*diameter,120*diameter])
	const rotation = useTransform(scrollY,[0.2,0.6],[0+index*10,360])	

	const [opacity,setOpacity] = useState(Math.abs(scaleTransition.current/1000))
	const [starSize,setstarSize] = useState(scaleTransition.current/10)
	const [size,setSize] = useState(scaleTransition.current)
	const [starTranslate,setstarTranslate] = useState(scaleTransition.current*11/20)
	const [starPos,setstarPos] = useState(scaleTransition.current*2/5)

	scaleTransition.onChange((current, value) => {
		setOpacity(Math.abs(current/1000))
		if(current/10<50)
			setstarSize(current/10)
		setstarTranslate(current*11/20)
		setstarPos(current*2/5)
		setSize(current)
	})

	const variants = {
		0:"star-right",
		1:""
	}

	const showVariants = {
		0:"absolute",
		1:"hidden"
	}


	return (
		<motion.div 
			className={`star-right ${size<2200?showVariants[0]:showVariants[1]}  rounded-full  border-[0.75px] border-chalk z-0  small:hidden ${star?variants[0]:variants[1]}`}
			style={{
				width: 	scaleTransition,
				height: scaleTransition,
				left: leftTransition,
				opacity: opacity,
				rotateZ:star?rotation:0
				
			}}
		>

			{star&&
				<img
					className="absolute"
					style={{
						width: starSize,
						height: starSize,
						top: starPos,
						left: starPos,
						translate:starTranslate
					}} 
					src="/icons/lightStar.svg"
				/>
			}
		</motion.div>
	)
}

export default StarCircle