import ScrollContainer from "../components/ScrollContainer"
import Hero from "../layouts/Hero"
import Introduction from "../layouts/Introduction"
import Experiences from "../layouts/Experiences"
import Projects from "../layouts/Projects"
import Ethics from "../layouts/Ethics"
import SkillsTools from "../layouts/SkillsTools"
import Reviews from "../layouts/Reviews"

function Home() {

	return (
		<main className="flex flex-col items-center relative bg-ivory w-full h-fit overflow-x-clip">
			<Hero/>
			<Introduction/>
			{/* <Experiences/> */}
			{/* <Ethics/> */}
			{/* <Projects/>
			<SkillsTools/>
			<Reviews/> */}
		</main>
	)
}

export default Home