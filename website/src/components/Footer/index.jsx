import {useRef, useEffect} from 'react'
import Fluid from 'webgl-fluid'

function Footer() {


	const canvas = useRef(null)
	useEffect(function () {
		let c = canvas.current
		Fluid(c,{
			IMMEDIATE: false, 
			TRIGGER: 'hover',
			SIM_RESOLUTION: 8,
			DYE_RESOLUTION: 24,
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
			BLOOM: false,
			SUNRAYS: true,
			SUNRAYS_RESOLUTION: 2,
  			SUNRAYS_WEIGHT: 0.35,
		  })
	}, [])	  

	return (
		<div className="w-screen h-screen  fixed top-0 z-0 bg-charcoal  bluewash">

			<canvas 
				className="bg-noise w-full  opacity-40" 
				ref={canvas} 
			>
			</canvas>

			<div className="mt-40 bg-ivory w-full absolute top-0">
				<p></p>	

				<h2></h2>

				<div>
					<button></button>

					<div>
						<p></p>
						<div>
							<a></a>
							<a></a>
						</div>
					</div>
				</div>
			</div>

			<></>
			<></>

		</div>
	)
}

export default Footer