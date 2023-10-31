import {Link} from "react-router-dom"
import { motion } from "framer-motion"
import { useState } from "react"

function ProjectTile({key=0}) {

	const [isOpen,setIsOpen] = useState(false)

	return (
		<>
			<div 
				className="flex border-x-[1.5px] border-b-[1.5px] border-charcoal justify-between gap-10 p-5 hover:bg-ivory transition-all px-10 w-full items-center group relative"
				style={key==0?{borderTop:"1.5px solid"}:{borderTop:"0px"}}
				onMouseEnter={()=>setIsOpen(true)}
				onMouseLeave={()=>setIsOpen(false)}
			>
				<div className="flex gap-2">
					<Link 
						className="opacity-80 hover:opacity-100 transition-all"
						to={""}>
						<img src="./github.png"/>
					</Link>

					<Link 
						className="opacity-80 hover:opacity-100 transition-all"
						to={""}>
						<img src="./figma.png"/>
					</Link>
				</div>

				<h2 className="text-3xl font-[300] w-[20%]">Event Management Application</h2>

				<div className="w-[50%] ">
					<p>Led the development of a decentralized journalism platform with NextJs, EthersJs, GraphQl, and Ceramic Network.</p>
					<p>Developed features like faucet via Wagmi, subscription pipeline via Superfluid, and secure identities with Ceramic DID.</p>
					<p>This innovative project secured the runner-up spot at the IGDTUW Devacation Hackathon.</p>
				</div>

				<Link 
					className="opacity-80 hover:opacity-100 transition-all"
					to={""}>
					<img src="./arrow.svg"/>
				</Link>

				{isOpen?
				<motion.div 
					className="absolute bottom-0 left-[15%] rounded-md border-[1.5px] border-charcoal p-3 bg-chalk z-20"
					layoutId="hover"
				>
					<img src="./projectTemplateImage.png"/>
				</motion.div>:null}
			</div>

		</>
	)
}

export default ProjectTile