import Avaibility from "./Avaibility"
import Linktree from "./Linktree"

import {Link} from "react-router-dom"

function index() {

	return (
		<div className="fixed top-0 z-50 font-mada flex w-screen p-10 justify-between items-start">
			<div className="flex w-[15%] justify-between font-normal text-grey relative">
				<Linktree/>
				<Link
					className="hover:text-charcoal transition-colors" 
					to={"/dashboard"}>
					Dashboard
				</Link>
				<Link
					className="hover:text-charcoal transition-colors" 
					target="_blank"
					to={"/resume.pdf"}>
					Resume
				</Link>
			</div>

			<Avaibility/>
		</div>
	)
}

export default index