
import { useWindowSize } from "../utils/useWindowSize"
import { useState, useEffect } from "react"

import Seperator from "../components/GradientWave/Seperator"
import Reveiw from "../components/Reveiw"
import ScrollBanner from "../components/ScrollBanner"

function Reviews() {

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

	const reviews = [
		{
			text:"We found Vishnu to be a self-starter who is motivated, duty bound and hard working.",
			author:"Ilan Bhatia, Director Metabetter Technologies Private Limited",
			proof:"./hedgeco.pdf"
		},
		{
			text:"Aside from his love and dedication, Vishnu had always been a decent and kind man who kept good relationships with everyone",
			author:"Mohit Khanna",
			proof:"./staybook.pdf"
		},
		{
			text:"We found Vishnu to be a self-starter who is motivated, duty bound and hard working. He worked sincerely on his assignment and his performance was par excellence.",
			author:"Ilan Bhatia, Metabetter Technologies Private Limited",
			proof:"./hedgeco.pdf"
		},
		{
			text:"We found Vishnu to be a self-starter who is motivated, duty bound and hard working.",
			author:"Ilan Bhatia",
			proof:"./hedgeco.pdf"
		},
		{
			text:"We found Vishnu to be a self-starter who is motivated, duty bound and hard working.",
			author:"Ilan Bhatia",
			proof:"./hedgeco.pdf"
		},
	]

	

	return (
		<div className="relative w-screen h-fit px-48 small:px-0 flex flex-col items-center select-none font-mada text-charcoal font-[400] gap-20 small:gap-10 justify-between snap-center bg-chalk">

			<Seperator
				top
			/>
			
			<div className="text-5xl small:text-2xl w-[30rem] small:w-[24rem] self-start capitalize flex relative items-center justify-center small:px-8">
				<h2>
					Here's what some awesome people have said about working with me.
				</h2>
				<img
					className="absolute -bottom-5  small:right-10 small:h-[50%]"
					src="./icons/comma.svg"
				/>
			</div>

			<div className="grid grid-cols-2 gap-x-[2vw] small:gap-12 grid-flow-row-dense small:flex small:flex-col small:px-8 h-[50vh]">

				{
					reviews.slice(0,device==="SMALL"?3:undefined)
					.map(({text,author,proof},index) => 
						<Reveiw 
							key={index}
							review={text}
							author={author}
							proof={proof}
						/>
					)
				}
	
			</div>


			<ScrollBanner 
				bg={"url(./others/bannerLight.svg)"}
				bgColor={"#F4F9FF"}
				bottom
			/>

		</div>
	)
}

export default Reviews