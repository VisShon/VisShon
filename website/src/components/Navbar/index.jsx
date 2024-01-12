import Linktree from "./Linktree"
import Avaibility from "./Avaibility"

import {Link} from "react-router-dom"

function index() {

	return (
		<div className="relative z-50 small:text-[0.9em] font-mada flex w-full px-10 small:px-5 py-7 justify-between items-start ">
			<div className="flex small:gap-1 gap-10 justify-between font-normal text-grey relative small:flex-col-reverse">
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