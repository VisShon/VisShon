import { useAnimate,useScroll,useSpring,useTransform,stagger,motion } from "framer-motion"
import { useEffect, useState } from "react"

function Index() {

	const [scope, animate] = useAnimate()
	const [focus,setFocus] = useState(false)

	const { scrollY } = useScroll()
	const springScroll = useSpring(scrollY, {
		stiffness: 80,
		damping: 30,
		restDelta: 0.01,
	})

	const wabbitScroll = useTransform(springScroll,[0,1000],[0,-300])
	const wabbitOpacity = useTransform(springScroll,[0,300,800],[1,1,0],{clamp: false})

	const burstGum = () =>{
		setFocus(true)
		animate(
			".gum",
			{
				scale:0,
				x:-100
			},
			{repeat:0, ease: "easeInOut", duration:1}
		)
		
	}
	
  	useEffect(() => {
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
			{repeat:Infinity, ease: "easeInOut", duration:5, delay:stagger(0.7, { startDelay: 0.4 })}
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
			{repeat:Infinity, ease: "easeInOut", duration:5, delay:stagger(0.7, { startDelay: 0.4, from:"last"})}
		)

		animate(
			".gum",
			{
				scale:[0.9,1.2,0.9],
				x:[-25,0,-25]
			},
			{repeat:Infinity, ease: "easeInOut", duration:20}
		)
	}, [])


	return (
		<div className="w-full h-[95vh] relative -mt-10  flex flex-col justify-start items-center" ref={scope}>

			<img 
				className="w-full h-[100vh] absolute top-0 z-10 object-cover bg-['linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%)']" 
				src="./others/noise.svg"
			/>

			<div 
				className=" w-[60%] absolute -top-20 z-20 felx justify-end" 
				onClick={burstGum} 
			>
				<motion.img 
					className="relative z-10 w-[90%]"
					style={{
						y:wabbitScroll,
						opacity:wabbitOpacity
					}}
					src="./others/wabbit.png"
				/>

				{focus?
				<motion.img
					className="gum absolute top-[30%] right-0 z-20 w-[30%] cursor-pointer select-none"
					style={{
						y:wabbitScroll,
						opacity:wabbitOpacity
					}}
					src="/others/burstbubblegum.svg"
				/>:
				<motion.img
					className="gum absolute top-[30%] -right-2 z-20 w-[30%] cursor-pointer select-none"
					style={{
						y:wabbitScroll,
						opacity:wabbitOpacity
					}}
					src="/others/bubblegum.svg"
				/>}


				
			</div>
			
				
			<ul className="w-full flex relative" >
				<li className="left w-[30%]"/>
				<li className="left w-[30%]"/>
				<li className="left w-[30%]"/>
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
				<li className="right w-[30%]"/>
				<li className="right w-[30%]"/>
				<li className="right w-[30%]"/>

			</ul>

		</div>
	)
}

export default Index