import {Link} from "react-router-dom"
import ImageComponent from "../components/ImageContainer";

function ContentIntroducton() {
	return (
		<div className="font-mada text-charcoal w-full h-screen flex flex-col justify-end">

			<div className="flex p-20 w-full justify-between items-end">
				<div className="w-[40%]">
					<p>Convener</p>
					{/* <div className="flex gap-2">
						<Link 
							className="opacity-80 hover:opacity-100 transition-all"
							to={""}>
							<img className="w-[1.8rem] mb-2" src="/github.png"/>
						</Link>

						<Link 
							className="opacity-80 hover:opacity-100 transition-all"
							to={""}>
							<img className="w-[1.8rem] mb-2" src="/figma.png"/>
						</Link>
					</div> */}
					<h2 className="text-7xl font-[300]">1 PIXEL DESIGN CONFERENCE.</h2>
					<p>11 December, 2022</p>
				</div>

				<Link
					className="hover:scale-105 scale-100 transition-all"
					to={""}
				>
					<img
						src="/arrow.svg"
					/>
				</Link>
			</div>

			
			<ImageComponent
				src={"/pixel.png"}
				width={"100vw"}
				height={"50vh"}
			/>

		</div>
	)
}

export default ContentIntroducton