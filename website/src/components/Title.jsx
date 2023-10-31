import { TypeAnimation } from "react-type-animation"

function Title() {
	return (
		<div className="w-full text-center flex justify-center items-center h-96 -my-20">
			<TypeAnimation
				sequence={[
					"DEVELOPER",
					60000, 
					"INNOVATOR",
					60000, 
					"DESIGNER",
					60000, 
				]}
				cursor={false}
				preRenderFirstString={true}
				speed={150}
				className="font-luimp italic font-[400] text-[224px] leading-0 text-charcoal tracking-[-13.44px] text-center capitalize w-full"
				repeat={Infinity}
			/>
		</div>
	)
}

export default Title