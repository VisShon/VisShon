import {useRef, useEffect} from 'react'
import WebGLFluid from 'webgl-fluid'

function Footer() {

	const canvas = useRef(null)
	
	useEffect(function () {
		if(canvas.current!==undefined){
			WebGLFluid(canvas.current,{
				IMMEDIATE: true,
				SIM_RESOLUTION: 8,
				DYE_RESOLUTION: 128,
				CAPTURE_RESOLUTION: 0,
				DENSITY_DISSIPATION: 2,
				VELOCITY_DISSIPATION: 0.2,
				PRESSURE: 0.005,
				PRESSURE_ITERATIONS: 1,
				COLORFUL: false,
				CURL: 2,
				SPLAT_RADIUS: 1,
				SPLAT_FORCE: 500,
				SPLAT_COUNT: 1,
				SHADING: false,
				COLORFUL: true,
				COLOR_UPDATE_SPEED: 10,
				PAUSED: false,
				TRANSPARENT: true,
				BLOOM: true,
				BLOOM_INTENSITY: 0.2,
				SUNRAYS: true,
				SUNRAYS_RESOLUTION: 2,
					SUNRAYS_WEIGHT: 0.2,
			}) 
		}
	}, [canvas])	  

	return (
		<div className="w-screen h-[100vh] bg-ivory fixed top-0 z-0  p-10 flex flex-col justify-center items-center font-mada text-ivory ">

			<div className="bg-ivory w-[10vw] h-[10vh] absolute top-0 -right-[2.5vw] small:-right-[2.5vh] z-30 rotate-45  small:h-[10vw] small:w-[10vh]"></div>

			<a 
				className="border border-ivory p-2 rounded-lg px-4 hover:bg-ivory hover:text-charcoal transition-all ease-in-out duration-100 z-50 absolute bottom-16 left-20 small:left-12 small:bottom-36"
				href={"mailto:vshon447@gmail.com"}
			>
				Contact Me
			</a>

			<canvas 
				className="bg-noise opacity-80 absolute w-[96%] h-[96%] rounded-lg z-20 bluewash top-4 " 
				ref={canvas} 
			>
			</canvas>

			<div className="w-[96%] h-[96%] p-10 absolute top-4  flex flex-col justify-end bg-charcoal bluewash rounded-lg">
				<section className="absolute top-10 small:text-sm">
					<p>From here, <b>new</b> </p>
					<p><b>chapters await</b>, and</p>
					<p>our adventure</p>
					<p>continues</p>
				</section>	


				<div className="flex justify-between  small:flex-col small:w-full">

					<h2 className="text-7xl mb-20 small:text-6xl small:mb-32">HAVE AN IDEA ?</h2>

					<div className="w-fit font-[300] self-end">
						<p>2023 © VisShon, New Delhi. All rights reserved</p>
						<div className="text-sm small:text-[1.6vh] underline flex gap-2 justify-between">
							<a href="tel:+91-7017495876">
								Ph. no: +91-7017495876
							</a>
							<a href={"mailto:vshon447@gmail.com"}>
								Mail: vshon447@gmail.com
							</a>
						</div>
					</div>
				</div>
			</div>


		</div>
	)
}

export default Footer