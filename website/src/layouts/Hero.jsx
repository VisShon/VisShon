import { useState } from "react"
import GradientWave from "../components/GradientWave"
import Title from "../components/Title"
import { Link } from "react-router-dom"

function Hero() {

	const [link1Selected, setLink1Selected] = useState(false)
	const [link2Selected, setLink2Selected] = useState(false)


	return (
		<>
			<div className="flex flex-col justify-center items-center font-mada p-32 text-charcoal tracking-[1.8px] text-center select-none relative w-[70%] -mb-10">
				<h2 className="font-[400] text-4xl">FULL STACK</h2>
				<Title/>
				<GradientWave/>
			</div>

			<div className="text-grey font-mada font-[400]  flex w-full justify-between p-10 items-end absolute top-[75vh]">
				<p className="w-[8%] select-none">
					I'm <b> Vishnu Shon, </b>I develop solutions that  blend creativity with functionality.
				</p>
				<div className="w-[8%] flex flex-col right-0 gap-5">
					<Link 
						className="relative hover:text-[#CCCFD4] transition-all"
						target="_blank"
						onMouseEnter={()=>setLink1Selected(true)}
						onMouseLeave={()=>setLink1Selected(false)}
						to="https://www.facebook.com/hcdiiitd/photos/3283459738578121/?paipv=0&eav=AfbJyIIwVX-zQRLBd9lIKcHDOF-EMF_S6VPrUes4f2yjkS6F26GRJPozk3PLblQ27Hw&_rdr">
						{link1Selected&&<img
							className="absolute top-0 transition-all ease-in-out w-[60%]" 
							src="./arrow.svg"
						/>}
						Bounty Winner, Polygon Buidlit Hackathon
					</Link>

					<Link 
						className="relative hover:text-[#CCCFD4] transition-all"
						target="_blank"
						onMouseEnter={()=>setLink2Selected(true)}
						onMouseLeave={()=>setLink2Selected(false)}
						to="https://ethglobal.com/showcase/alkynefi-nampv">
						{link2Selected&&<img
							className="absolute top-0 transition-all ease-in-out w-[60%]" 
							src="./arrow.svg"
						/>}
						Bounty Winner, Ethereum India Hackathon
					</Link>
				</div>
			</div>
		</>
	)
}

export default Hero