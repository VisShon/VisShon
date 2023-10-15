import {Link} from "react-router-dom"

function Tabs() {

	return (
		<div>
			<div>
				<img/>
				<a>
					<img/>
				</a>
			</div>

			<Link to={'#home'}>Home</Link>
			<Link to={'#works'}>Works</Link>
			<Link to={'#projects'}>Projects</Link>
			<Link to={'mailto:vshon447@gmail.com'}>Dashboard</Link>
		</div>
	)
}

export default Tabs