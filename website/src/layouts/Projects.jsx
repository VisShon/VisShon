import { useState } from "react";
import { motion } from "framer-motion"

import ProjectTile from "../components/ProjectTile"
import ProjectCard from "../components/ProjectCard"

function Projects() {

	const [selected,setSelected] = useState("LIST")

	return (
		<div className="w-screen h-fit relative p-48 pt-24 flex flex-col items-center select-none font-mada text-charcoal font-[400] gap-20 justify-between bg-chalk">

			<div className="text-4xl w-full self-start capitalize flex relative items-center justify-between ">

				<h2 
					className="w-[25%]"
				>
					From pixel to prototype, 
					each project is a canvas of innovation
				</h2>

				<div className="w-[30%] text-sm flex flex-col items-end gap-5">
					<div 
						className="flex justify-between  border-[1.5px] rounded-3xl"
					>
						<button 
							className="px-5 rounded-full relative flex justify-center items-center z-20"
							onClick={()=>setSelected("GRID")}
							style={selected=="GRID"?{color: "#FFFFFF"}:{}}
						>
							<p 
								layout 
								className="z-20 relative transition-all"
							>
								GRID
							</p>

							{selected=="GRID"?
							<motion.div 
								className="bg-charcoal w-full h-full absolute top-0 rounded-full z-0"
								layoutId="underline"
							/>:null}
						</button>

						<button 
							className="px-5 rounded-full relative flex justify-center items-center z-10"
							onClick={()=>setSelected("LIST")}
							style={selected=="LIST"?{color: "#FFFFFF"}:{}}
						>
							<p 
								layout 
								className="z-20 relative transition-all"
							>
								LIST
							</p>
							{selected=="LIST"?
							<motion.div 
								className="bg-charcoal w-full h-full absolute top-0 rounded-full z-0"
								layoutId="underline"
							/>:null}
						</button>
					</div>


					<p className="text-base text-right">
						Vishnu"s project portfolio is a testament 
						to his boundless creativity and technical prowess.
					</p>
				</div>

			</div>

			{selected=="LIST"?
				<div className="w-full flex flex-col">
					<ProjectTile/>
				</div>:

				<div className="w-full flex flex-col">
					<ProjectCard/>
					{/* <ProjectCard/>
					<ProjectCard/>
					<ProjectCard/>
					<ProjectCard/> */}
				</div>
			}

		</div>
	)
}

export default Projects