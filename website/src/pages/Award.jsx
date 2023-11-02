import ContentIntroducton from "../layouts/ContentIntroducton"
import ContentDescription from "../layouts/ContentDescription"
import SkillsTools from "../layouts/SkillsTools"
import Submission from "../layouts/Submission"


function Award() {
	return (
		<main className="flex flex-col items-center relative bg-ivory w-full h-fit">

			<ContentIntroducton/>
			<ContentDescription/>
			<SkillsTools/>
			<Submission/>			
		</main>
	)
}

export default Award