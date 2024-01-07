import {Link} from "react-router-dom"
import { motion } from "framer-motion"

function PopUpTile({bg,title,descp,link,key}) {

	return (
		<motion.div 
			className="flex border-b-[1.5px] border-charcoal justify-between gap-10 p-5 hover:bg-ivory transition-all px-10 w-full items-center group relative cursor-pointer bg-contain"
			layout
			style={key==0?{borderTop:"1.5px solid"}:{borderTop:"0px solid"}}
		>
			<div className="flex gap-20 items-center w-[30%] justify-between">
				<img 
					className="rounded-full w-[5rem] h-[5rem]"
					src={bg}
				/>

				<h2 
					className="text-4xl font-[300]">
					{title}
				</h2>
			</div>

			<div 
				className="w-[45%] ">
				<p>{descp[0]}</p>
				<p>{descp[1]}</p>
				<p>{descp[2]}</p>
			</div>

			<Link 
				className="opacity-80 hover:opacity-100 transition-all"
				to={link}>
				<img 
					src="./icons/arrow.svg"
				/>
			</Link>

		</motion.div>
	)
}


function DashboardPopUp({bg}) {
	return (
		<div 
			className="absolute flex flex-col justify-center items-center w-screen h-full p-4">
			<div className="rounded-3xl bg-ivory w-full h-full flex flex-col justify-center p-20">
				<PopUpTile 
					link={""} 
					key={0}
					title={"Escrow Based Payment Management Platform"} 
					descp={["· Led the development of a decentralized journalism platform with NextJs, EthersJs, GraphQl, and Ceramic Network.",
					"· Developed features like faucet via Wagmi, subscription pipeline via Superfluid, and secure identities with Ceramic DID.",
					"· This innovative project secured the runner-up spot at the IGDTUW Devacation Hackathon."]} 
					bg={bg}
				/>
				<PopUpTile 
					link={""} 
					key={1}
					title={"Escrow Based Payment Management Platform"} 
					descp={["· Led the development of a decentralized journalism platform with NextJs, EthersJs, GraphQl, and Ceramic Network.",
					"· Developed features like faucet via Wagmi, subscription pipeline via Superfluid, and secure identities with Ceramic DID.",
					"· This innovative project secured the runner-up spot at the IGDTUW Devacation Hackathon."]} 
					bg={bg}
				/>
				<PopUpTile 
					link={""} 
					key={2}
					title={"Escrow Based Payment Management Platform"} 
					descp={["· Led the development of a decentralized journalism platform with NextJs, EthersJs, GraphQl, and Ceramic Network.",
					"· Developed features like faucet via Wagmi, subscription pipeline via Superfluid, and secure identities with Ceramic DID.",
					"· This innovative project secured the runner-up spot at the IGDTUW Devacation Hackathon."]} 
					bg={bg}
				/>
				<PopUpTile 
					link={""} 
					key={3}
					title={"Escrow Based Payment Management Platform"} 
					descp={["· Led the development of a decentralized journalism platform with NextJs, EthersJs, GraphQl, and Ceramic Network.",
					"· Developed features like faucet via Wagmi, subscription pipeline via Superfluid, and secure identities with Ceramic DID.",
					"· This innovative project secured the runner-up spot at the IGDTUW Devacation Hackathon."]} 
					bg={bg}
				/>
			</div>
		</div>
	)
}

export default DashboardPopUp