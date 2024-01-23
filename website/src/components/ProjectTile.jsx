import { motion } from "framer-motion"
import { useState } from "react"

function ProjectTile({index,title,descriptions,image,links,project}) {

	const [isOpen,setIsOpen] = useState(false)

	const variants ={
		0:"border border-t-[1.5px] border-b-0",
		1:"border border-t-[1.5px] border-b-[1.5px]"
	}

	const descpLength = project.descriptions.length

	return (
		<>
			<div 
				className={`flex ${index==9?variants[1]:variants[0]} border-charcoal justify-between gap-10 p-5 hover:bg-ivory transition-all px-10 small:px-5 w-full items-center group relative `}
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
							href={link?.url}>
							<img 
								className="w-[2rem] object-contain"
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
					className="opacity-80 hover:opacity-100 transition-all small:hidden"
					>
					<img src="./icons/arrow.svg"/>
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
						src={image?image:"./others/projectPattern.png"}
					/>
				</motion.div>:null}
			</div>

			{/* <div className="fixed left-0 top-0 w-screen h-screen bg-chalk p-5 z-50 flex">
				<div className=" border-l border-y rounded-l-md h-full w-[30%] p-10 flex flex-col items-start justify-between">
					<section>
						<h2 className="text-grey text-[2vw] w-[50%] leading-tight small:text-[3vh]">{project.title}</h2>

						<div className="w-[50%] text-lg small:text-[0.65rem] small:tracking-tighter capitalize leading-tight font-light mt-5">
							{project.date&&<p>{project.date}</p>}
							{project.tags&&<p >{project.tags}</p>}
						</div>
					</section>

					<div className="flex gap-2 w-[15vw] small:mx-2 small:flex-col">
						{links.map((link,index)=>(
							<a 
								key={index}
								className="opacity-80 hover:opacity-100 transition-all "
								target="_blank"
								href={link?.url}>
								<img 
									className="w-[2rem] object-contain"
									src={`./icons/${link.name}Dark.svg`}
								/>
							</a>
						))}
					</div>
				</div>

				<div className="w-[70%] h-full border rounded-r-md overflow-y-scroll z-0">
					<motion.button 
						className="fixed top-10 right-5  z-20  "
						whileHover={{opacity:1}}
						// onClick={()=>setStatus(false)} 
					>
						<img 
							className="w-[50%] "
							src="./icons/cross.svg"
						/>
					</motion.button>

					<section className="p-10 px-20 w-[90%] flex flex-col items-start  text-2xl overflow-hidden">
						{
							<>
								<a 
									className="w-full"
									target="_blank"
									href={project.images[0]}>
									<img
										className="w-full object-cover h-[50vh] object-top"
										src={project.images[0]}
									/>
								</a>
								<p className="my-5">{project.descriptions[0]}</p>

								<div className="flex w-full gap-10">
									<a 
										className="w-[50%]"
										target="_blank"
										href={project.images[1]}>
										<img
											className="w-full object-contain h-[40vh]"
											src={project.images[1]}
										/>
									</a>
									<a 
										className="w-[50%]"
										target="_blank"
										href={project.images[2]}>
										<img
											className="w-full object-contain h-[40vh]"
											src={project.images[2]}
										/>
									</a>
								</div>
								<p className="my-5">{project.descriptions[1]}</p>


								{descpLength-3>=0&&	
									<>
										<a 
											className="w-full"
											target="_blank"
											href={project.images[3]}>
											<img
												className="w-full object-contain h-[50vh] object-left"
												src={project.images[3]}
											/>
										</a>
										<p className="my-5">{project.descriptions[2]}</p>
									</>
								}

								{descpLength-4>=0&&
									<>
										<div className="flex w-full gap-10">
											<a 
												className="w-full"
												target="_blank"
												href={project.images[4]}>
												<img
													className="w-full object-contain h-[40vh]"
													src={project.images[4]}
												/>
											</a>
											<a 
												className="w-full"
												target="_blank"
												href={project.images[5]}>
												<img
													className="w-full object-contain h-[40vh]"
													src={project.images[5]}
												/>
											</a>
										</div>
										<p className="my-5">{project.descriptions[3]}</p>
									</>
								}

								<div className="grid grid-cols-2 gap-10 mt-10">
									{
										project.images.slice(descpLength+1).map((image,id)=>
											<a
												className="w-full"
												href={image}				
											>
												<img
													className="w-full object-fill h-fit"
													src={image}
												/>
											</a>
										)
									}
								</div>
							</>
						}
					</section>
				</div>

			</div> */}

		</>
	)
}

export default ProjectTile