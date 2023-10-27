import { useAnimate,useScroll,useSpring,useTransform,stagger,motion } from "framer-motion"
import { useEffect } from "react";

function Index() {

	const staggerItems = stagger(0.4, { startDelay: 0.25 })
	const [scope, animate] = useAnimate()

	const { scrollY } = useScroll()
	const springScroll = useSpring(scrollY, {
		stiffness: 80,
		damping: 30,
		restDelta: 0.01,
	})
	const wabbitScroll = useTransform(springScroll,[0,1000],[0,-300])
	const wabbitOpacity = useTransform(springScroll,[0,800],[1,0])
	

  	useEffect(() => {
		animate(
			".left",
			{
				height:["80vh","90vh","80vh"],
				background:[
					"linear-gradient(180deg, #190736 0%, #8F5BD4 15%, #C387FF 35%, #FC8EDD 65%, #FF519A 75%, #B40056 90%, #2E061C 105%)",
					"linear-gradient(180deg, #190736 16%, #8F5BD4 27%, #C387FF 47%, #FC8EDD 53%, #FF519A 63%, #B40056 78%, #2E061C 93%)",
					"linear-gradient(180deg, #190736 0%, #8F5BD4 15%, #C387FF 35%, #FC8EDD 65%, #FF519A 75%, #B40056 90%, #2E061C 105%)",
				]
			},
			{repeat:Infinity, ease: "easeInOut", duration:3, delay:staggerItems}
		)

		animate(
			".right",
			{
				height:["90vh","80vh","90vh"],
				background:[
					"linear-gradient(180deg, #190736 16%, #8F5BD4 27%, #C387FF 47%, #FC8EDD 53%, #FF519A 63%, #B40056 78%, #2E061C 93%)",
					"linear-gradient(180deg, #190736 0%, #8F5BD4 15%, #C387FF 35%, #FC8EDD 65%, #FF519A 75%, #B40056 90%, #2E061C 105%)",
					"linear-gradient(180deg, #190736 16%, #8F5BD4 27%, #C387FF 47%, #FC8EDD 53%, #FF519A 63%, #B40056 78%, #2E061C 93%)",
				]
			},
			{repeat:Infinity, ease: "easeInOut", duration:3, delay:staggerItems}
		)
	}, [])


	return (
		<div className="w-full h-full relative -mt-10  flex flex-col justify-center items-center">

			<img 
				className="w-full h-[90vh] absolute z-10 object-cover bg-['linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%)']" 
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
				<li className="left w-[10%]"/>
				<li className="left w-[10%]"/>
				<li className="left w-[10%]"/>
				<li className="left w-[10%]"/>
				<li className="left w-[10%]"/>
				<li className="left w-[10%]"/>
				<li className="left w-[10%]"/>


				<li className="right w-[10%]"/>
				<li className="right w-[10%]"/>
				<li className="right w-[10%]"/>
				<li className="right w-[10%]"/>
				<li className="right w-[10%]"/>
				<li className="right w-[10%]"/>
				<li className="right w-[10%]"/>
			</ul>

		</div>
	)
}

export default Index