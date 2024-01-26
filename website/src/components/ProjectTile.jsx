import { motion } from "framer-motion"
import { useState } from "react"
import ProjectPopUp from "./ProjectPopUp"

function ProjectTile({index,title,descriptions,image,links,project}) {

	const [isOpen,setIsOpen] = useState(false)
	const [isPopUpOpen,setIsPopUpOpen] = useState(false)

	const variants ={
		0:"border border-t-[1.5px] border-b-0",
		1:"border border-t-[1.5px] border-b-[1.5px]"
	}

	return (
		<>
			<div 
				className={`flex ${index===4?variants[1]:variants[0]} border-charcoal justify-between gap-10 p-5 hover:bg-ivory transition-all px-10 small:px-5 w-full items-center group relative cursor-pointer`}
				onMouseEnter={()=>setIsOpen(true)}
				onMouseLeave={()=>setIsOpen(false)}
			>

				<h2 className="text-3xl small:text-xl font-[300]  w-[15vw] small:w-[8vh]">{title}</h2>

				<div className="flex gap-2 w-[15vw] small:mx-2 small:flex-col">
					{links.map((link,index)=>(
						<a 
							key={index}
							className="opacity-80 hover:opacity-100 transition-all "
							target="_blank"
							rel="noreferrer"
							href={link?.url}>
							<img 
								className="w-[2rem] object-contain"
								alt={link.name}
								src={`./icons/${link.name}Dark.svg`}
							/>
						</a>
					))}
				</div>

				<div className="w-[50%] small:w-[60%] small:text-sm">
					<p className="my-5">{descriptions[0]}</p>
					<p className="small:hidden">{descriptions[1]}</p>
				</div>

				<button 
					onClick={()=>setIsPopUpOpen(true)}
					className="opacity-80 hover:opacity-100 transition-all small:hidden"
					>
					<img 
						alt={"Learn More"}
						src="./icons/arrow.svg"
					/>
				</button>

				{isOpen?
				<motion.div 
					className="w-[42rem] h-[25rem] absolute bottom-[100%] left-[15%] rounded-md border-[1.5px] border-charcoal p-3 bg-chalk z-20 transition-all ease-in-out"
					layoutId
					initial={{opacity: 0, filter:"blur(4px)"}}
					animate={{opacity: 1, filter:"blur(0px)"}}
				>
					<img 
						className="w-full h-full object-contain"
						alt={title}
						src={image?image:"./others/projectPattern.png"}
					/>
				</motion.div>:null}
			</div>

			<ProjectPopUp
				project={project}
				isOpen={isPopUpOpen}
				setIsOpen={setIsPopUpOpen}
			/>

		</>
	)
}

export default ProjectTile