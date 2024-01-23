import {
	motion
} from "framer-motion"

function GooglyEyes({xposition, yposition}) {


	return (
		<div className="w-[20%] h-full rounded-full p-2  flex flex-col justify-start items-start relative ">

			<img
				className="object-fill rounded-full absolute w-[90%] bottom-0 z-0 "
				src="./others/ethicPhoto.png"
			/>

			<div className="relative flex w-full -ml-2 mt-[3vw] ">
				<div className="rounded-full w-[1.5em] h-[1.5em] absolute top-[1vh] left-[28%] z-10 bg-ivory flex justify-center items-center">
					<motion.div 
						style={{
							translateX:(xposition),
							translateY:(yposition),
						}}
						className="rounded-full w-[1rem] h-[1rem] bg-charcoal"
					></motion.div>
				</div>

				<div className=" rounded-full w-[1.5rem] h-[1.5rem] absolute top-0 left-[40%] z-10 bg-ivory flex justify-center items-center">
					<motion.div 
						style={{
							translateX:(xposition),
							translateY:(yposition),
						}}
						className="rounded-full w-[1rem] h-[1rem] bg-charcoal"
					></motion.div>
				</div>
			</div>

		</div>
	)
}

export default GooglyEyes