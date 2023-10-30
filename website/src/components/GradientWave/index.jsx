import { useAnimate,useScroll,useSpring,useTransform,stagger,motion } from "framer-motion"
import { useEffect } from "react";

function Index() {

	const [scope, animate] = useAnimate()

	const { scrollY } = useScroll()
	const springScroll = useSpring(scrollY, {
		stiffness: 80,
		damping: 30,
		restDelta: 0.01,
	})
	const wabbitScroll = useTransform(springScroll,[0,1000],[0,-300])
	const wabbitOpacity = useTransform(springScroll,[0,300,800],[1,1,0],{clamp: false})
	

  	useEffect(() => {
		animate(
			".left",
			{
				height:["80vh","90vh","80vh"],
				background:[
					"linear-gradient(180deg, #190736 0%, #8F5BD4 15%, #C387FF 35%, #FC8EDD 65%, #FF519A 75%, #B40056 90%, #2E061C 100%)",
					"linear-gradient(180deg, #190736 16%, #8F5BD4 27%, #C387FF 47%, #FC8EDD 53%, #FF519A 63%, #B40056 78%, #2E061C 95%)",
					"linear-gradient(180deg, #190736 0%, #8F5BD4 15%, #C387FF 35%, #FC8EDD 65%, #FF519A 75%, #B40056 90%, #2E061C 100%)",
				]
			},
			{repeat:Infinity, ease: "easeInOut", duration:5, delay:stagger(0.8, { startDelay: 0.4 })}
		)

		animate(
			".right",
			{
				height:["80vh","95vh","80vh"],
				background:[
					"linear-gradient(180deg, #190736 0%, #8F5BD4 15%, #C387FF 35%, #FC8EDD 65%, #FF519A 75%, #B40056 90%, #2E061C 100%)",
					"linear-gradient(180deg, #190736 16%, #8F5BD4 27%, #C387FF 47%, #FC8EDD 53%, #FF519A 63%, #B40056 78%, #2E061C 95%)",
					"linear-gradient(180deg, #190736 0%, #8F5BD4 15%, #C387FF 35%, #FC8EDD 65%, #FF519A 75%, #B40056 90%, #2E061C 100%)",
				]
			},
			{repeat:Infinity, ease: "easeInOut", duration:5, delay:stagger(0.8, { startDelay: 0.4, from:"last"})}
		)
	}, [])


	return (
		<div className="w-full h-[95vh] relative -mt-10  flex flex-col justify-start items-center">

			<img 
				className="w-full h-[100vh] absolute top-0 z-10 object-cover bg-['linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%)']" 
				src="./noise.svg"
			/>
			
			<motion.img 
				style={{
					y:wabbitScroll,
					opacity:wabbitOpacity
				}}
				className=" w-[50%] absolute -top-20 z-20" 
				src="./wabbit.png"
			/>

			<ul className="w-full flex relative" ref={scope}>
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

			</ul>

		</div>
	)
}

export default Index