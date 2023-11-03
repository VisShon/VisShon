import Linktree from "./Linktree"

import {Link} from "react-router-dom"

function index() {

	return (
		<div className="relative top-0 z-50 font-mada flex w-full p-10 justify-between items-start ">
			<div className="flex gap-10 justify-between font-normal text-grey relative">
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
		</div>
	)
}

export default index