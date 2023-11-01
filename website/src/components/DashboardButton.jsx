import {Link} from "react-router-dom"

function DashboardButton({index,descp,link,title}) {

	const variants = {
		0:"col-span-3 row-span-4 bg-workBg",
		1:"col-span-6 row-span-4 col-start-4 bg-projectBg",
		2:"col-span-3 row-span-4 row-start-5 bg-communityBg",
		3:"col-span-3 row-span-4 col-start-4 row-start-5 bg-mentorshipBg",
		4:"col-span-3 row-span-4 col-start-7 row-start-5 bg-awardsBg",
	}
	
	return (
		<div className={`bg-no-repeat w-fill h-fill bg-cover ${variants[index]} rounded-3xl p-10 text-chalk flex flex-col items-end justify-between`}>
			<Link to={""}>
				<img 
					src="arrowWhite.svg"
				/>
			</Link>
			<p className="w-[80%] self-start">
				Vishnu has held roles as a Frontend Developer at various organizations, 
				showcasing expertise in creating user-centric interfaces. 
				Additionally, he has contributed as a UI Designer, 
				demonstrating versatility in design domains
			</p>
			<h2 className="text-5xl self-start">WORK ARCHIVE</h2>
		</div>
	)
}

export default DashboardButton