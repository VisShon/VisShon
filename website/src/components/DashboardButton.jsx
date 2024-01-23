import { useState } from "react"
import { motion } from "framer-motion"
import PopUpTile from "./PopUpTile"

function DashboardButton({index,descp,title,data,setBg}) {

	const [popup,setPopup] = useState(false)

	const variants = {
		0:"col-span-3 row-span-4 bg-workBg",
		1:"col-span-6 row-span-4 col-start-4 bg-projectBg",
		2:"col-span-3 row-span-4 row-start-5 bg-communityBg",
		3:"col-span-3 row-span-4 col-start-4 row-start-5 bg-mentorshipBg",
		4:"col-span-3 row-span-4 col-start-7 row-start-5 bg-awardsBg",
	}
	const variantsBg = {
		0:"workBg",
		1:"projectBg",
		2:"communityBg",
		3:"mentorshipBg",
		4:"awardsBg",
	}

	return (
		<>
			<div 
				className={`bg-no-repeat small:gap-10 w-full h-[42vh] bg-cover ${variants[index]} rounded-3xl text-chalk flex flex-col items-end justify-between select-none cursor-pointer p-10 small:p-4 small:hover:p-4 hover:p-12 transition-all ease-in-out duration-300`}
				onClick={()=>{
					setBg({
						image:"url(./others/bannerDark.svg",
						color:"#1F1F1F"
					})
					return setPopup(true)
				}}
			>

				<img 
					src="./icons/arrowWhite.svg"
				/>


				<p 
					className="w-[25vw] self-start small:w-full text-[0.85vw] small:text-sm"
				>
					{descp}
				</p>

				<h2 
					className="text-[3vw] self-start small:text-[3vh]"
				>
					{title}
				</h2>
			</div>

			<>
				{popup&&
				<div 
					className="fixed z-50 flex flex-col justify-center items-center w-full small:w-[98vw] bg-charcoal h-[90vh] bottom-0 p-4 small:p-0 overflow-x-hidden scroll-smooth"
				>
						<motion.div 
							className="rounded-3xl bg-ivory w-full h-full pt-20 px-0 overflow-y-scroll  overflow-x-hidden"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ 
								duration: 0.5, 
								ease: "easeOut" 
							}}
						>

							<button
								onClick={()=>{
									setBg({
										image:"url(./others/bannerLight.svg)",
										color:"#F4F9FF"
									})
									return setPopup(false)
								}} 
								className="absolute top-10 right-10 small:right-0 small:top-4 z-10">
								<img 
									className="small:w-[50%]"
									src="./icons/cross.svg"
								/>
							</button>


								{
									data.map((item,id)=>(
										<PopUpTile 
											key={id}
											title={item?.title} 
											descriptions={item?.descriptions} 
											bg={`./others/${variantsBg[index]}.png`}
										/>
									))
								}

						</motion.div>
					</div>}
			</>
		</>
	)
}

export default DashboardButton