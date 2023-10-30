import Seperator from "../components/GradientWave/Seperator"

function SkillsTools() {

	return (
		<div className="w-screen h-screen relative px-48 flex flex-col items-center justify-between select-none font-mada text-grey font-[400] gap-20">

			<div className="flex text-4xl justify-between w-full text-right py-20">
				<div className="flex flex-col">
					<h2 className="text-charcoal text-5xl">Frameworks</h2>
					<p>NEXTJs</p>
					<p>ReactJs</p>
					<p>ReactNative</p>
					<p>ExpressJs</p>
					<p>NodeJs</p>
					<p>EthersJs</p>
					<p>Apollo</p>
					<p>Redux</p>
				</div>

				<div>
					<h2 className="text-charcoal text-5xl">Languages</h2>
					<p>JavaScript</p>
					<p>TypeScript</p>
					<p>GraphQL</p>
					<p>Python</p>
					<p>HTML</p>
					<p>CSS</p>
					<p>SQL</p>
				</div>

				<div>
					<h2 className="text-charcoal text-5xl">Platforms</h2>
					<p>Google Cloud</p>
					<p>Firebase</p>
					<p>Moralis</p>
					<p>Infura</p>
					<p>Sanity</p>
					<p>Docker</p>
					<p>Figma</p>
					<p>Moz</p>
				</div>

				<div>
					<h2 className="text-charcoal text-5xl">Databases</h2>
					<p>PostgreSQL</p>
					<p>Firestore</p>
					<p>MongoDB</p>
					<p>MySQL</p>
					<p>Neo4j</p>
					<p>Redis</p>
					<p>CeramicDB</p>
				</div>
			</div>

			<p className="w-[30%] self-start">
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