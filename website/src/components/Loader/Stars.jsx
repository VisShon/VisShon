import { useEffect } from "react"
import { useAnimate,stagger } from "framer-motion"

function Stars() {


	const [scope, animate] = useAnimate()

  	useEffect(() => {
		animate(
			".star-right",
			{
				rotate: [90,180,270,360,405,450],
			},
			{	repeat:Infinity, 
				ease: "easeInOut", 
				duration:10, 
				delay:stagger(1, { startDelay: 0.4 })
			}
		)			
	}, [animate])



	return (
		<div className="w-screen h-screen absolute top-0 z-0 overflow-clip opacity-80" ref={scope}>
			<div className="relative flex flex-col items-center justify-center w-full h-full">
				
				<div className="star-right absolute top-28 left-24  small:top-32  small:-left-20  rounded-full border-opacity-50 w-[60vh] h-[60vh] border-[0.75px] border-grey z-0  ">
					<img
						className="absolute top-[calc(50%_-_3vh)] left-[calc(50%_-_3vh)] translate-x-[30vh]" 
						alt="Star"
						src="/icons/darkStar.svg"
					/>
				</div>


				<div className="absolute top-16 left-16 rounded-full border-opacity-50 w-[80vh] h-[80vh] border-[0.75px] border-grey z-0 small:hidden"></div>
				<div className="absolute top-8 left-12 small:top-24  small:-left-32 rounded-full border-opacity-50 w-[90vh] h-[90vh] small:w-[80vh] small:h-[80vh] border-[0.75px] border-grey z-0 "></div>


				<div className="star-right absolute -top-10 left-4 small:top-12 small:-left-64  rounded-full border-opacity-50 w-[120vh] h-[120vh] border-[0.75px] border-grey z-0 ">
					<img
						className="absolute top-[calc(50%_-_6vh)] left-[calc(50%_-_6vh)] translate-x-[63vh]" 
						alt="Star"
						src="/icons/darkStar.svg"
					/>
				</div>
				<div className="star-right absolute -top-28 -left-0  rounded-full border-opacity-50 w-[140vh] h-[140vh] border-[0.75px] border-grey z-0  small:hidden">
					<img
						className="absolute top-[calc(50%_-_7vh)] left-[calc(50%_-_7vh)] translate-x-[74vh]" 
						alt="Star"
						src="/icons/darkStar.svg"
					/>
				</div>

			</div>
		</div>
	)
}

export default Stars