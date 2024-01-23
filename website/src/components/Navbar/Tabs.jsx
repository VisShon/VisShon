
function Tabs() {

	return (
		<div className="w-screen fixed bottom-10 flex justify-center z-20">

			<div className="gap-10 flex justify-between text-sm text-chalk text-opacity-50 items-center bg-charcoal bg-opacity-70 rounded-md p-2">
				<div className="gradient gap-5 p-2 rounded-md flex justify-between items-center">
					<img 
						className="h-[10%]" 
						src="./logo.svg"
					/>
					<a
						className="hover:opacity-100 opacity-95" 
						href={"/dashboard"}>
						<img src="./others/dashboard.svg"/>
					</a>
				</div>

				<a 
					className=" hover:text-ivory transition-colors"
					href={"#home"}>Home
				</a>
				<a 
					className=" hover:text-ivory transition-colors"
					href={"#works"}>Works
				</a>
				<a 
					className=" hover:text-ivory transition-colors"
					href={"#projects"}>Projects
				</a>
				<a 
					className=" hover:text-ivory transition-colors"
					href={"mailto:vshon447@gmail.com"}>Lets Talk
				</a>
			</div>
		</div>
	)
}

export default Tabs