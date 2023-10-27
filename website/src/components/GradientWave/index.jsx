import { useAnimate, stagger } from "framer-motion"
import { useEffect } from "react";

function Index() {

	const staggerItems = stagger(0.4, { startDelay: 0.25 });
	const [scope, animate] = useAnimate()

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
		<div className="w-full h-full relative">

			<img src/>

			<ul className="w-full -mt-10 flex relative" ref={scope}>
				<li
					className="left w-[10%]">	
				</li>
				<li
					className="left w-[10%]">	
				</li>
				<li
					className="left w-[10%]">	
				</li>
				<li
					className="left w-[10%]">	
				</li>
				<li
					className="left w-[10%]">	
				</li>
				<li
					className="left w-[10%]">	
				</li>
				<li
					className="left w-[10%]">	
				</li>


				<li
					className="right w-[10%]">		
				</li>
				<li
					className="right w-[10%]">		
				</li>
				<li
					className="right w-[10%]">		
				</li>
				<li
					className="right w-[10%]">		
				</li>
				<li
					className="right w-[10%]">		
				</li>
				<li
					className="right w-[10%]">		
				</li>
				<li 
					className="right w-[10%]">		
				</li>
			</ul>
		</div>
	)
}

export default Index