import { useInView } from "framer-motion"
import { useRef,useEffect } from "react"

function ExperienceCard({index,logo,device,setCurrent,setAnimate}) {

	const ref = useRef(null)
	const inView = useInView(ref)

	const variants = {
		0:"h-[145vh]",
		1:"h-[145vh]",
		2:"h-[145vh]",
		3:"h-[73vh]",
		4:"h-[291vh]",

	}

	useEffect(()=>{
		if(inView){
			setAnimate(true)
			setTimeout(()=>{
				setAnimate(false)
				setCurrent(index)
			},300)
		}
	},[inView])

	
	
	return (
		<div  className={`w-full ${device==="SMALL"?variants[index]:variants[4]} relative`}
		>
			<div 
				className="flex flex-col justify-center items-center w-full h-[80vh] small:h-[30vh] sticky top-20 small:top-10 p-2 " 
			>
				<img 
					className="absolute h-[60%] small:h-[40%]"
					src={logo}
				/>

				<img 
					ref={ref}
					className="w-full rounded-md h-full object-cover"
					src={`./others/${index+1}BG.png`}
				/>

			</div>
		</div>
	)
}

export default ExperienceCard