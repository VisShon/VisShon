import { useState } from "react"
import { Link } from "react-router-dom"
import { useScroll,useSpring,useTransform,motion } from "framer-motion"

import GradientWave from "../components/GradientWave"
import Title from "../components/Title"
import Wabbit from "../components/Wabbit"


function Hero() {

	const [linkSelected, setLinkSelected] = useState(0)

	const { scrollY } = useScroll()
	const springScroll = useSpring(scrollY, {
		stiffness: 100,
		damping: 20,
		restDelta: 0.01,
	})
	const titleBlur = useTransform(springScroll,[200,500],[0,3])

	const [blur,setBlur] = useState(titleBlur.current)
	titleBlur.onChange((current, value) => {setBlur(current)})


	return (
		<div className="relative w-full h-fit flex flex-col justify-start items-center">
			
			<Title/>
			<GradientWave/>
			<Wabbit/>

			<motion.div 
				className="text-grey small:text-chalk text-[1em] small:text-[0.85em] font-mada font-[400] flex  small:flex-row-reverse justify-between w-full p-10 small:p-5 items-end absolute small:top-[26%] large:bottom-[28%]"
				style={{
					filter:`blur(${blur}px)`
				}}
			>
				
				<div className="w-fit select-none ">
					<p>I'm <b> Vishnu Shon, </b></p>
					<p>I develop</p>
					<p>solutions that</p>
					<p>blend creativity</p>
					<p>with functionality.</p>
				</div>

				<div className="w-fit flex flex-col right-0 gap-5 small:hidden">
					<Link 
						className="relative hover:text-[#CCCFD4] transition-all"
						target="_blank"
						onMouseEnter={()=>setLinkSelected(1)}
						onMouseLeave={()=>setLinkSelected(0)}
						to="https://www.facebook.com/hcdiiitd/photos/3283459738578121/?paipv=0&eav=AfbJyIIwVX-zQRLBd9lIKcHDOF-EMF_S6VPrUes4f2yjkS6F26GRJPozk3PLblQ27Hw&_rdr">

							{linkSelected==1&&
							<img
								className="absolute top-0 transition-all ease-in-out" 
								src="./icons/arrow.svg"
							/>}
							<p>Bounty Winner,</p>
							<p>Polygon Buidlit</p>
							<p>Hackathon</p>							
					</Link>

					<Link 
						className="relative hover:text-[#CCCFD4] transition-all"
						target="_blank"
						onMouseEnter={()=>setLinkSelected(2)}
						onMouseLeave={()=>setLinkSelected(0)}
						to="https://ethglobal.com/showcase/alkynefi-nampv">

							{linkSelected==2&&
							<img
								className="absolute top-0 transition-all ease-in-out w-[40%] " 
								src="./icons/arrow.svg"
							/>}
							<p>Bounty Winner,</p>
							<p>Ethereum India</p>
							<p>Hackathon</p>	
					</Link>
					
				</div>
			</motion.div>
		</div>
	)
}

export default Hero