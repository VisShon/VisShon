import ScrollContainer from "../components/ScrollContainer"
import Tabs from "../components/Navbar/Tabs"
import Hero from "../layouts/Hero"
import Introduction from "../layouts/Introduction"
import Experiences from "../layouts/Experiences"
import Projects from "../layouts/Projects"
import Ethics from "../layouts/Ethics"
import SkillsTools from "../layouts/SkillsTools"
import Reviews from "../layouts/Reviews"

function Home() {

	return (
		<main className="flex flex-col items-center relative bg-ivory">
			<ScrollContainer>
				{/* <Hero/> */}
				{/* <Introduction/> */}
				{/* <Experiences/> */}
				{/* <Ethics/> */}
				<Projects/>
				{/* <SkillsTools/> */}
				{/* <Reviews/> */}
			</ScrollContainer>

			<Tabs/>
		</main>
	)
}

export default Home