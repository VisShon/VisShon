import React from "react"
import ContentIntroducton from "../layouts/ContentIntroducton"
import ContentDescription from "../layouts/ContentDescription"
import Gallery from "../layouts/Gallery";

function Community() {
	return (
		<main className="flex flex-col items-center relative bg-ivory w-full h-fit">

			<ContentIntroducton/>
			<ContentDescription/>
			<Gallery/>

		</main>
	)
}

export default Community