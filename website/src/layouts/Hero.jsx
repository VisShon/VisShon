import GradientWave from "../components/GradientWave";
import Title from "../components/Title";


function Hero() {
	return (
		<>
			<div className="flex flex-col justify-center items-center font-mada p-32 text-charcoal tracking-[1.8px] text-center select-none relative w-fit">
				<h2 className="font-[400] text-4xl">FULL STACK</h2>
				<Title/>
				<GradientWave/>
			</div>

			<div className="text-grey font-mada font-[400]  flex w-full justify-between p-10 items-end absolute top-[75vh]">
				<p className="w-[8%]">
					I'm <b> Vishnu Shon, </b>I develop solutions that  blend creativity with functionality.
				</p>
				<div className="w-[8%] flex flex-col right-0 gap-5">
					<p>Bounty Winner, Polygon Buidlit Hackathon</p>
					<p>Bounty Winner, Ethereum India Hackathon </p>
				</div>
			</div>
		</>
	)
}

export default Hero