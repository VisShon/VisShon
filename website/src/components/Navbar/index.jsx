import Linktree from "./Linktree"
import Avaibility from "./Avaibility"

function Navbar() {

	return (

		<>
			<div className="absolute top-0  z-30 small:text-[0.9em] font-mada flex w-full px-10 small:px-5 py-7 justify-between items-start ">
				<div className="flex small:gap-1 gap-10 justify-between font-normal text-grey relative small:flex-col-reverse">
					<Linktree/>
					<a
						className="hover:text-charcoal transition-colors" 
						href={"/dashboard"}>
						Dashboard
					</a>
					<a
						className="hover:text-charcoal transition-colors" 
						target="_blank"
											rel="noreferrer"
						href={"/resume.pdf"}>
						Resume
					</a>
					<a
						className="hover:text-charcoal transition-colors" 
						target="_blank"
											rel="noreferrer"
						href={"https://www.figma.com/community/file/1292935637129990867"}>
						Like This ?
					</a>
				</div>

				<Avaibility/>
			</div>
		</>
	)
}

export default Navbar