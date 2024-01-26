import { useState } from "react"
import { motion } from "framer-motion"

function Linktree() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<button
				className="hover:text-charcoal transition-colors w-[3rem] h-[1.5em] text-left" 
				onClick={()=>setIsOpen(prev=>!prev)}
				
			>
				Linktree
				<motion.div
					onMouseLeave={()=>setIsOpen(false)}
				 	animate={{
						clipPath: isOpen
						  ? "inset(0% 0% 0% 0% round 10px)"
						  : "inset(10% 50% 90% 50% round 10px)"
					}}
					transition={{
						type: "spring",
						bounce: 0,
						duration: 0.5
					}}
					className="grid grid-cols-2  bg-charcoal bg-opacity-50 relative top-5 p-5  text-left rounded-sm justify-center  text-chalk gap-5 w-[12rem] small:w-[10rem] small">

					<a
						className="hover:text-charcoal transition-all" 
						target="_blank"
											rel="noreferrer"
						href={"https://github.com/VisShon"}>
						Github
					</a>

					<a
						className="hover:text-charcoal transition-all" 
						target="_blank"
											rel="noreferrer"
						href={"https://www.linkedin.com/in/vishnu-shon-079007202/"}>
						LinkedIn
					</a>

					<a
						className="hover:text-charcoal transition-all" 
						target="_blank"
											rel="noreferrer"
						href={"https://www.figma.com/@VisShon"}>
						Figma
					</a>

					<a
						className="hover:text-charcoal transition-all" 
						target="_blank"
											rel="noreferrer"
						href={"https://www.instagram.com/visshon/"}>
						Instagram
					</a>

					<a
						className="hover:text-charcoal transition-all" 
						target="_blank"
											rel="noreferrer"
						href={"https://twitter.com/ShonVishnu"}>
						Twitter
					</a>

					<a
						className="hover:text-charcoal transition-all" 
						target="_blank"
											rel="noreferrer"
						href={"https://t.me/VShon1"}>
						Telegram
					</a>

					<a
						className="hover:text-charcoal transition-all" 
						target="_blank"
											rel="noreferrer"
						href={"https://discord.com/channels/0xvishnu"}>
						Discord
					</a>
				</motion.div>
			</button>
		</>
	)
}

export default Linktree