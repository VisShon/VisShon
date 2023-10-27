import ScrollContainer from "../components/ScrollContainer"
import Tabs from "../components/Navbar/Tabs";
import Hero from "../layouts/Hero"

function Home() {

	return (
		<main className="flex flex-col items-center relative bg-ivory">
			<ScrollContainer>
				<Hero/>
			</ScrollContainer>

			<Tabs/>
		</main>
	)
}

export default Home