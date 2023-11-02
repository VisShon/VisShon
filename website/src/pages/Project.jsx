import ContentIntroducton from "../layouts/ContentIntroducton"
import ContentDescription from "../layouts/ContentDescription"
import SkillsTools from "../layouts/SkillsTools"
import ShowCase from "../layouts/ShowCase"

function Project() {
	return (
		<main className="flex flex-col items-center relative bg-ivory w-full h-fit">

			<ContentIntroducton/>
			<ContentDescription/>
			<SkillsTools/>
			<ShowCase/>
			
		</main>
	)
}

export default Project