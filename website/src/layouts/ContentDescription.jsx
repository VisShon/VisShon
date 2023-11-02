import ImageComponent from "../components/ImageContainer"

function ContentDescription() {
	return (
		<div className="flex w-full h-screen justify-between items-end mb-40">

			<div className="bg-communityBg w-[50%] h-[80vh] bg-cover flex justify-end items-start rounded-tr-lg overflow-hidden">
				<ImageComponent
					src={"/pixel.png"}
					width={"90%"}
					height={"90%"}
				/>
			</div>

			<div className="text-[32px] w-[45%] leading-snug justify-self-start inline-block font-mada text-grey  p-32">
				The 1 Pixel Design Conference was a 2-day event, 
				anticipating a strong attendance of over 300 design enthusiasts. 
				This immersive experience  encompassed various domains including 
				Communication Design, UX Research, UI/UX Design, Animation, and Gaming, 
				offering attendees a comprehensive insight into the evolving industry trends. 
				With an exclusive application-based format, conference promised 
				an intimate setting for learning and networking. 
			</div>
		</div>
	)
}

export default ContentDescription