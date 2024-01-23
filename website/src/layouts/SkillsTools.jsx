import Seperator from "../components/GradientWave/Seperator"

function SkillsTools() {

	return (
		<div className="w-screen h-fit relative px-48 small:px-0 flex flex-col items-center small:items-end justify-between select-none font-mada text-grey font-[400] gap-20 snap-center bg-chalk">

			<div className="large:flex text-4xl small:px-10 small:text-base justify-between w-full text-right py-20 small:py-0 small:grid small:grid-cols-2 small:gap-4">
				<div className="small:w-[70%] large:text-[1.75vw]">
					<h2 className="text-charcoal text-[2.5vw]  small:text-[3vh]">Frameworks</h2>
					<p>NEXTJs</p>
					<p>ReactJs</p>
					<p>ReactNative</p>
					<p>ExpressJs</p>
					<p>NodeJs</p>
					<p>EthersJs</p>
					<p>Apollo</p>
					<p>Redux</p>
				</div>

				<div className="small:w-[70%] large:text-[1.75vw]">
					<h2 className="text-charcoal text-[2.5vw]  small:text-[3vh]">Languages</h2>
					<p>JavaScript</p>
					<p>TypeScript</p>
					<p>GraphQL</p>
					<p>Python</p>
					<p>HTML</p>
					<p>CSS</p>
					<p>SQL</p>
				</div>

				<div className="small:w-[70%] large:text-[1.75vw]">
					<h2 className="text-charcoal text-[2.5vw]  small:text-[3vh]">Platforms</h2>
					<p>Google Cloud</p>
					<p>Firebase</p>
					<p>Moralis</p>
					<p>Infura</p>
					<p>Sanity</p>
					<p>Docker</p>
					<p>Figma</p>
					<p>Moz</p>
				</div>

				<div className="small:w-[70%] large:text-[1.75vw]">
					<h2 className="text-charcoal text-[2.5vw]  small:text-[3vh]">Databases</h2>
					<p>PostgreSQL</p>
					<p>Firestore</p>
					<p>MongoDB</p>
					<p>MySQL</p>
					<p>Neo4j</p>
					<p>Redis</p>
					<p>CeramicDB</p>
				</div>
			</div>

			<p className="w-[35%] small:-mb-10 small:text-sm self-start small:self-center small:text-center small:w-full">
				Through lines of code, a brand comes to life,<br/>
				In the realm of tech, I conquer the strife. <br/>
				If you seek a creator, passionate and true, <br/>
				Write to me now, let's build something new!
			</p>

			<Seperator
				bottom			
			/>

		</div>
	)
}

export default SkillsTools