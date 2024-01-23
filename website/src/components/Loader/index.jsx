import { motion } from "framer-motion"
import Stars from "./Stars"


function Loading({progress,quote}) {


	return (
		<div 
			className="fixed top-0 w-screen h-screen bg-ivory loader text-charcoal z-50 "			
		>
			<motion.div 
				className="w-full h-full overflow-hidden bg-ivory flex flex-col justify-center items-center z-50"
				initial={{opacity: 0}} 
				animate={{opacity: 1}}
				transition={{
					duration:0.5
				}}
			>
				<p
					className="font-[600] font-luimp text-4xl small:text-left small:text-xl my-2 w-[70%] tracking-widest z-20">
					{
						progress<100?
							progress<10?
								`00${progress}`:
								`0${progress}`
						:`${progress}`
					}
				</p>

				<h2
					className="w-[70%] capitalize font-luimp font-[400] text-[3vw] small:text-[3vh] text-charcoal tracking-tightest text-left z-20">
					{quote.current}
				</h2>

				<Stars/>

			</motion.div>
			
		</div>
	)
}

export default Loading