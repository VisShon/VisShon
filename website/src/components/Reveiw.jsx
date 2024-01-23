
function Reveiw({review,author,proof}) {
	return (
		<a 	
			href={proof}  
			target="_blank"
			className="small:text-sm text-[0.95vw]"
		>
			<p className="hover:opacity-60 transition-all ease-in-out">
				“{review}”
			</p>
			<p className="italic">
				-{author}
			</p>
		</a>
	)
}

export default Reveiw