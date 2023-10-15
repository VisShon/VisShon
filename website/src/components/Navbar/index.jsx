import Avaibility from "./Avaibility"
import Linktree from "./Linktree"

import {Link} from "react-router-dom"

function index() {

	return (
		<div>
			<div>
				<Linktree/>
				<Link to={'/dashboard'}>Dashboard</Link>
				<Link to={'linktoresume'}>Resume</Link>
			</div>

			<Avaibility/>
		</div>
	)
}

export default index