import { useState } from "react"

import Linktree from "./Linktree"
import Avaibility from "./Avaibility"
import Dashboard from "../../layouts/Dashboard"

function Navbar() {

	const [dashboard, setDashboard] = useState("HIDDEN")

	return (

		<>
			<div className="absolute top-0 z-50 small:text-[0.9em] font-mada flex w-full px-10 small:px-5 py-7 justify-between items-start ">
				<div className="flex small:gap-1 gap-10 justify-between font-normal text-grey relative small:flex-col-reverse">
					<Linktree/>
					<button
						className="hover:text-charcoal transition-colors" 
						onClick={()=>setDashboard("VISIBLE")}>
						Dashboard
					</button>
					<a
						className="hover:text-charcoal transition-colors" 
						target="_blank"
						href={"/resume.pdf"}>
						Resume
					</a>
				</div>

				<Avaibility/>
			</div>


			<Dashboard
				status={dashboard}
				setStatus={setDashboard}
			/>
		</>
	)
}

export default Navbar