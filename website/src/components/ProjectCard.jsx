import {Link} from "react-router-dom"
import { motion } from "framer-motion"

function ProjectCard({style}) {

	const Skill = ({tool}) => {
		return(
			<p 
				className="text-center bg-chalk text-charcoal rounded-sm px-5 w-[20%]"
			>
				{tool}
			</p>
		)
	}

	return (

		<motion.div 
			className="border-[1.5px] border-charcoal p-3 rounded-lg text-chalk font-mada font-[300]"
			layout
			style={style}
			whileHover={{padding:"0px"}}
			initial={{padding:"10px"}}
		>

			<div className="flex flex-col gap-10 p-3 rounded-lg bg-no-repeat bg-cover h-full w-full justify-between bg-project-pattern">

				<div className="flex flex-wrap w-full gap-2">
					<Skill tool={"React"}/>
					<Skill tool={"React"}/>
					<Skill tool={"React"}/>
					<Skill tool={"React"}/>
					<Skill tool={"React"}/>
					<Skill tool={"React"}/>
					<Skill tool={"React"}/>
				</div>


				<div className="flex flex-col h-[60%] justify-end">
					<div className="flex flex-col gap-10 w-[40%] h-[70%] mb-10">
						<div className="h-full w-[1px] bg-chalk -mb-4"/>
						<div className="h-[1px] w-full bg-chalk"/>
					</div>

					<div className="flex w-full justify-between items-center h-[20%]">
						<p className="w-[80%] text-sm font-[400]">
							Spearheaded the development of an advanced event management platform, 
							leveraging cutting-edge technologies like NextJS, Neo4j, GraphQL, 
							and Apollo client. This robust application offers seamless private 
							routing and middleware for secure access, ensuring efficient navigation 
							and an exceptional user experience
						</p>

						<Link
							className="p-5 bg-chalk rounded-full opacity-90 hover:opacity-100" 
							to={"linktoproject"}>
							<img src="./icons/arrow.svg"/>
						</Link>
					</div>
				</div>

			</div>

		</motion.div>

	)
}

export default ProjectCard