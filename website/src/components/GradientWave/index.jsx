import { useAnimate,stagger } from "framer-motion"
import { useEffect, useState } from "react"
import { useWindowSize } from '../../utils/useWindowSize';

function Index() {

	const [scope, animate] = useAnimate()
	const [width, height] = useWindowSize()
	const [device, setDevice] = useState("")

	useEffect(()=>{
		if(width < 500)
			setDevice("SMALL")
		if(width <=1030 && width >=500)
			setDevice("MEDIUM")
		if(width >1030)
			setDevice("LARGE")
	},[width])

	console.log(device)

  	useEffect(() => {
		if(device === "LARGE")
			animate(
				".left",
				{
					height:["90vh","100vh","90vh"],
					background:[
						"linear-gradient(180deg, #190736 0%, #8F5BD4 15%, #C387FF 35%, #FC8EDD 65%, #FF519A 75%, #B40056 90%, #2E061C 100%)",
						"linear-gradient(180deg, #190736 16%, #8F5BD4 27%, #C387FF 47%, #FC8EDD 53%, #FF519A 63%, #B40056 78%, #2E061C 95%)",
						"linear-gradient(180deg, #190736 0%, #8F5BD4 15%, #C387FF 35%, #FC8EDD 65%, #FF519A 75%, #B40056 90%, #2E061C 100%)",
					]
				},
				{repeat:Infinity, ease: "easeInOut", duration:5, delay:stagger(0.5, { startDelay: 0.4 })}
			)

		animate(
			".right",
			{
				height:["90vh","105vh","90vh"],
				background:[
					"linear-gradient(180deg, #190736 0%, #8F5BD4 15%, #C387FF 35%, #FC8EDD 65%, #FF519A 75%, #B40056 90%, #2E061C 100%)",
					"linear-gradient(180deg, #190736 16%, #8F5BD4 27%, #C387FF 47%, #FC8EDD 53%, #FF519A 63%, #B40056 78%, #2E061C 95%)",
					"linear-gradient(180deg, #190736 0%, #8F5BD4 15%, #C387FF 35%, #FC8EDD 65%, #FF519A 75%, #B40056 90%, #2E061C 100%)",
				]
			},
			{repeat:Infinity, ease: "easeInOut", duration:5, delay:stagger(0.5, { startDelay: 0.4, from:"last"})}
		)
	}, [animate,device])


	


	return (
		<div className="w-[70%] small:w-full h-[95vh] relative flex flex-col justify-start items-center" ref={scope}>

			<img 
				className="w-full h-[100vh] absolute top-0 z-10 object-cover bg-['linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%)']" 
				src="./others/noise.svg"
				alt="noise"
			/>
	
			{
				device==="LARGE"?
				<ul className="w-full flex relative rounded-xl  overflow-x-clip" >
					<li className="left w-[30%]"/>
					<li className="left w-[30%]"/>
					<li className="left w-[30%]"/>
					<li className="left w-[30%]"/>
					<li className="left w-[30%]"/>
					<li className="left w-[30%]"/>
					<li className="left w-[30%]"/>

					<li className="right w-[30%]"/>
					<li className="right w-[30%]"/>
					<li className="right w-[30%]"/>
					<li className="right w-[30%]"/>
					<li className="right w-[30%]"/>
					<li className="right w-[30%]"/>
					<li className="right w-[30%]"/>
				</ul>:
				<ul className="w-full flex relative" >
					<li className="right w-[30%]"/>
					<li className="right w-[30%]"/>
					<li className="right w-[30%]"/>
					<li className="right w-[30%]"/>
					<li className="right w-[30%]"/>
					<li className="right w-[30%]"/>
					<li className="right w-[30%]"/>
				</ul>

			}

		</div>
	)
}

export default Index