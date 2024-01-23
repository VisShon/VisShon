import { useTransform,useScroll,motion } from "framer-motion"
import { useRef } from "react"

import StarCircle from "./StarCircle"

function TransitionTunnel() {

	const ref = useRef(null)

	const { scrollYProgress } = useScroll({
		target: ref,
	})


	const bgWidthTransition = useTransform(scrollYProgress,[0.6,1],["100%","23%"])
	const bgHeightTransition = useTransform(scrollYProgress,[0.6,1],["10%","5.5%"])
	const roundedTransition = useTransform(scrollYProgress,[0.6,1],["0.75rem","3rem"])
	const bgXTranslate = useTransform(scrollYProgress,[0.6,1],["0vw","20vw"])
	const bgYTranslate = useTransform(scrollYProgress,[0.6,1],["5%","20%"])




	return (
		<div ref={ref} className="w-screen h-[900vh] flex flex-col  p-14 relative items-end small:hidden">	

			<motion.div 
				className="w-full bg-tunnelBg bg-no-repeat bg-fill bg-[100%] h-[90vh]  sticky top-10  p-2  overflow-hidden"
				style={{
					width:bgWidthTransition,
					height:bgHeightTransition,
					borderRadius:roundedTransition,
					right:bgXTranslate,
					top:bgYTranslate,
				}}
			>

				<div className="relative flex flex-col items-center justify-center w-full h-full">

					<StarCircle
						index={12}
						scrollY={scrollYProgress}
						diameter={10}
						star={true}
					/>

					<StarCircle
						index={11}
						scrollY={scrollYProgress}
						diameter={20}
						star={true}
					/>


					<StarCircle
						index={10}
						scrollY={scrollYProgress}
						diameter={30}
						star={true}
					/>


					<StarCircle
						index={9}
						scrollY={scrollYProgress}
						diameter={40}
						star={false}
					/>



					<StarCircle
						index={8}
						scrollY={scrollYProgress}
						diameter={50}
						star={false}
					/>

					<StarCircle
						index={7}
						scrollY={scrollYProgress}
						diameter={50}
						star={false}
					/>


					<StarCircle
						index={6}
						scrollY={scrollYProgress}
						diameter={70}
						star={false}
					/>

					<StarCircle
						index={5}
						scrollY={scrollYProgress}
						diameter={80}
						star={false}
					/>


					<StarCircle
						index={4}
						scrollY={scrollYProgress}
						diameter={90}
						star={false}
					/>



					<StarCircle
						index={3}
						scrollY={scrollYProgress}
						diameter={100}
						star={false}
					/>



					<StarCircle
						index={2}
						scrollY={scrollYProgress}
						diameter={120}
						star={false}
					/>

					<StarCircle
						index={1}
						scrollY={scrollYProgress}
						diameter={130}
						star={false}
					/>

					
				</div>

			</motion.div>






		</div>
	)
}

export default TransitionTunnel