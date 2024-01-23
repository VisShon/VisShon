import { useState } from "react";
import { motion } from "framer-motion"

import ProjectTile from "../components/ProjectTile"
import projects from "../content/data/project.json"

function Projects() {

	const [selected,setSelected] = useState("LIST")

	return (
		<div className="w-screen h-fit relative p-48 small:p-2 pt-2 4 flex flex-col items-center select-none font-mada text-charcoal font-[400] gap-20 justify-between bg-chalk  snap-center small:pb-20 small:pt-20">

			<div className="text-4xl mt-10 w-full self-start capitalize flex relative items-center justify-between 																																				">

				<h2 
					className="w-[25%] small:w-full"
				>
					From pixel to prototype, 
					each project is a canvas of innovation
				</h2>

				<div className="w-[30%] text-sm flex flex-col items-end gap-5 small:hidden">
					<p className="text-base text-right">
						Vishnu's project portfolio is a testament 
						to his boundless creativity and technical prowess.
					</p>
				</div>

			</div>

			<div className="w-full flex flex-col">
				{projects?.slice(0,1)?.map(
					(project,index)=>(
						<ProjectTile
							key={index}
							index={index}
							title={project.title}
							project={project}
							descriptions={project.descriptions}
							image={project.images[0]}
							links={project.links}
						/>
					)
				)}
			</div>

		</div>
	)
}

export default Projects