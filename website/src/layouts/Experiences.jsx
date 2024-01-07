import ExperienceCard from "../components/ExperienceCard"
import { useState } from "react"
import { motion,useMotionValueEvent, useScroll } from "framer-motion"

function Experiences() {
	const [rotation,setRotation] = useState(0)
	const {scrollY} = useScroll()

	useMotionValueEvent(scrollY, "change", 
		(latest) => setRotation(prev=>prev+scrollY?.current/1000)
	)

	return (
		<>
			<div className="h-[500vh] p-12 w-full font-mada text-charcoal select-none relative mb-20">

				<div className="absolute flex flex-col items-center justify-start w-[40%] h-[98%] gap-20 z-20">
					<ExperienceCard/>
					<ExperienceCard/>
					<ExperienceCard/>
					<ExperienceCard/>
				</div>

				<div className="border-[1.5px] h-[80vh] rounded-md  border-grey p-48 flex justify-end sticky top-20">

					<div className="w-[40%] flex flex-col">
						<h2 className="font-[400] text-6xl mb-2">
							Mathworks
						</h2>
						<p className="rounded-full border-[1.5px] border-grey py-1 px-2 w-fit mb-10 text-lg">EDG Intern May 2023 - July 2023</p>

						<div className="flex flex-col gap-5 text-xl">
							<p>
								Revamped existing function-based UI tests for the Simulink 
								3D World Editor into a more effective class-based framework.
							</p>
							<p>
								Orchestrated the adoption of a cutting-edge class-based testing 
								framework, leading to a 30% improvement in software quality for 
								the upcoming software release.
							</p>
							<p>
								Enhanced test quality by 30%, gained valuable insights on client 
								relationships and ensured a top-quality product.
							</p>
						</div>

					</div>

					<motion.img
						animate={{rotateZ:rotation}}
						className="absolute bottom-10 right-24"
						src="./others/darkStar.svg"
					/>
				</div>

			</div>
		</>
	)
}

export default Experiences