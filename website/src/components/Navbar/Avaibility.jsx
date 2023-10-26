import {Link} from "react-router-dom"

function Avaibility() {
	return (
		<div className="flex flex-col items-end text-grey gap-1 font-[500]">
			<div className=" select-none">
				Delhi       
				<b> 🕒5:17 PM </b>
				GMT (+5:30)
			</div>

			<div className="select-none">
				🟢 Available 
				<b> October 2023</b>
			</div>

			<Link
				to={"mailto:vshon447@gmail.com"}>
				📧 
				<span className="underline" >  vshon447@gmail.com</span>
			</Link>
		</div>
	)
}

export default Avaibility