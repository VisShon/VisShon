import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

function Avaibility() {

	const {scrollY} = useScroll()

	const month = new Date().toLocaleDateString("en-US",{ 
		year: "numeric", 
		month: "long" 
	})

	const [active, setActive] = useState(false)
	const [time,setTime] = useState(new Date().toLocaleTimeString("en-IN", { 
		hour: "2-digit", 
		minute: "2-digit", 
		second: "2-digit", 
		timeZone: "Asia/Kolkata" 
	}))
	
	
	useMotionValueEvent(scrollY, "change", (latest) => {
		if (scrollY?.current < scrollY?.prev) {
			setActive(false)
		} else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
			setActive(true)
		}
 	})

	useEffect(()=>{
		setInterval(
			()=>setTime(new Date().toLocaleTimeString("en-IN", { 
				hour: "2-digit", 
				minute: "2-digit", 
				second: "2-digit", 
				timeZone: "Asia/Kolkata" 
			}))
			,1000
		)
	},[])

	const transition = {
		type: "spring",
		stiffness: 50,
		damping: 20,
		mass: 2
	  };

	return (
		<motion.div 
			className="flex flex-col items-end text-grey font-[500] fixed top-10 right-10 z-50 font-mada"
			transition={transition}
			style={
				active?
				{flexDirection:"row",gap:"1.25rem"}:
				{flexDirection:"column",gap:"0.5rem"}
			}
		>
			<motion.div
				className=" select-none"
				transition={transition} 
				layout
			>
				Delhi       
				<b> 🕒 {time.toUpperCase()} </b>
				GMT (+5:30)
			</motion.div>

			<motion.div 
				className="select-none capitalize"
				transition={transition} 
				layout
			>
				🟢 Available 
				<b> {month}</b>
			</motion.div>

			<motion.a
				transition={transition}
				href={"mailto:vshon447@gmail.com"}
				layout
			>
				📧 <u> vshon447@gmail.com </u>
			</motion.a>
		</motion.div>
	)
}

export default Avaibility