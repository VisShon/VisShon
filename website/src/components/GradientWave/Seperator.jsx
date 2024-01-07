import { useAnimate,stagger} from "framer-motion"
import { useEffect } from "react"

function Seperator({top,bottom}) {

	const [scope, animate] = useAnimate()

	useEffect(() => {
		animate(
			".left",
			{
				background:bottom?
				[
					"linear-gradient(180deg, rgba(29,13,55,1) 0%, rgba(89,54,137,1) 61%, rgba(142,98,198,1) 100%)",
					"linear-gradient(180deg, rgba(29,13,55,1) 45%, rgba(89,54,137,1) 82%, rgba(142,98,198,1) 100%)",
					"linear-gradient(180deg, rgba(29,13,55,1) 0%, rgba(89,54,137,1) 61%, rgba(142,98,198,1) 100%)",
				]:
				[
					"linear-gradient(180deg, rgba(173,13,88,1) 0%, rgba(110,9,59,1) 65%, rgba(48,5,28,1) 100%)",
					"linear-gradient(180deg, rgba(173,13,88,1) 0%, rgba(110,9,59,1) 17%, rgba(48,5,28,1) 53%)",
					"linear-gradient(180deg, rgba(173,13,88,1) 0%, rgba(110,9,59,1) 65%, rgba(48,5,28,1) 100%)",
				]

			},
			{repeat:Infinity, ease: "easeInOut", duration:5, delay:stagger(0.8, { startDelay: 0.4 })}
		)

		animate(
			".right",
			{
				background:bottom?
				[
					"linear-gradient(180deg, rgba(29,13,55,1) 0%, rgba(89,54,137,1) 61%, rgba(142,98,198,1) 100%)",
					"linear-gradient(180deg, rgba(29,13,55,1) 45%, rgba(89,54,137,1) 82%, rgba(142,98,198,1) 100%)",
					"linear-gradient(180deg, rgba(29,13,55,1) 0%, rgba(89,54,137,1) 61%, rgba(142,98,198,1) 100%)",
				]:
				[
					"linear-gradient(180deg, rgba(173,13,88,1) 0%, rgba(110,9,59,1) 65%, rgba(48,5,28,1) 100%)",
					"linear-gradient(180deg, rgba(173,13,88,1) 0%, rgba(110,9,59,1) 17%, rgba(48,5,28,1) 53%)",
					"linear-gradient(180deg, rgba(173,13,88,1) 0%, rgba(110,9,59,1) 65%, rgba(48,5,28,1) 100%)",
				]
			},
			{repeat:Infinity, ease: "easeInOut", duration:5, delay:stagger(0.8, { startDelay: 0.4, from:"last"})}
		)
	}, [])


	return (
		<div 
			className="w-full relative flex flex-col justify-start items-center h-[15vh] select-none"
		>
			<img 
				className="w-full h-[15vh] absolute top-0 z-10 object-cover bg-['linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%)']" 
				src="./others/seperatorNoise.svg"
			/>
	
			{top&&
			<ul className="w-full flex h-full" ref={scope}>
				<li className="left h-full w-[30%]"/>
				<li className="left h-full w-[30%]"/>
				<li className="left h-full w-[30%]"/>
				<li className="left h-full w-[30%]"/>
				<li className="left h-full w-[30%]"/>
				<li className="left h-full w-[30%]"/>
				<li className="left h-full w-[30%]"/>
				<li className="left h-full w-[30%]"/>



				<li className="right h-full w-[30%]"/>
				<li className="right h-full w-[30%]"/>
				<li className="right h-full w-[30%]"/>
				<li className="right h-full w-[30%]"/>
				<li className="right h-full w-[30%]"/>
				<li className="right h-full w-[30%]"/>
				<li className="right h-full w-[30%]"/>
				<li className="right h-full w-[30%]"/>
			</ul>}

			{bottom&&
			<ul className="w-full flex h-full" ref={scope}>
				<li className="left h-full w-[30%]"/>
				<li className="left h-full w-[30%]"/>
				<li className="left h-full w-[30%]"/>
				<li className="left h-full w-[30%]"/>
				<li className="left h-full w-[30%]"/>
				<li className="left h-full w-[30%]"/>
				<li className="left h-full w-[30%]"/>
				<li className="left h-full w-[30%]"/>



				<li className="right h-full w-[30%]"/>
				<li className="right h-full w-[30%]"/>
				<li className="right h-full w-[30%]"/>
				<li className="right h-full w-[30%]"/>
				<li className="right h-full w-[30%]"/>
				<li className="right h-full w-[30%]"/>
				<li className="right h-full w-[30%]"/>
				<li className="right h-full w-[30%]"/>
			</ul>}

		</div>
	)
}

export default Seperator