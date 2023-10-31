import {Link} from "react-router-dom"

function ProjectCard() {

	return (

		<div className="border-[1.5px] p-3 w-[30%] h-[60vh] rounded-md">

			<div className="flex flex-col bg-[purple] h-full w-full rounded-sm">

				<div>
					<p className="">REACT</p>
					<p className="">REACT</p>
					<p className="">REACT</p>
					<p className="">REACT</p>
					<p className="">REACT</p>
					<p className="">REACT</p>
					<p className="">REACT</p>
				</div>

				<div className=""/>
				<div className=""/>

				<div>
					<p>
						spearheaded the development of an advanced event management platform, 
						leveraging cutting-edge technologies like NextJS, Neo4j, GraphQL, 
						and Apollo client. This robust application offers seamless private 
						routing and middleware for secure access, ensuring efficient navigation 
						and an exceptional user experience
					</p>

					<Link
						className="" 
						to={""}>
						<img src="./arrow.svg"/>
					</Link>
				</div>

				<img/>

			</div>

		</div>

	)
}

export default ProjectCard