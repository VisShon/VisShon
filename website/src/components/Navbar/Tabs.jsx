import {Link} from "react-router-dom"

function Tabs() {

	return (
		<div className="fixed bottom-10  gap-10 flex justify-between text-sm text-chalk text-opacity-50 items-center bg-charcoal bg-opacity-70 rounded-md p-2">

			<div className="gradient gap-5 p-2 rounded-md flex justify-between items-center">
				<img 
					className="h-[10%]" 
					src="./logo.svg"
				/>
				<Link
					className="hover:opacity-100 opacity-95" 
					to={"/dashboard"}>
					<img src="./dashboard.svg"/>
				</Link>
			</div>

			<Link 
				className=" hover:text-ivory transition-colors"
				to={"#home"}>Home
			</Link>
			<Link 
				className=" hover:text-ivory transition-colors"
				to={"#works"}>Works
			</Link>
			<Link 
				className=" hover:text-ivory transition-colors"
				to={"#projects"}>Projects
			</Link>
			<Link 
				className=" hover:text-ivory transition-colors"
				to={"mailto:vshon447@gmail.com"}>Lets Talk
			</Link>
		</div>
	)
}

export default Tabs