import { useState, useEffect } from "react"

function Avaibility() {


	const month = new Date().toLocaleDateString("en-US",{ 
		year: "numeric", 
		month: "long" 
	})

	const [time,setTime] = useState(new Date().toLocaleTimeString("en-IN", { 
		hour: "2-digit", 
		minute: "2-digit", 
		second: "2-digit", 
		timeZone: "Asia/Kolkata" 
	}))
	

	useEffect(()=>{
		setInterval(
			()=>setTime(new Date().toLocaleTimeString("en-IN", { 
				hour: "2-digit", 
				minute: "2-digit", 
				second: "2-digit", 
				timeZone: "Asia/Kolkata" 
			}))
			,1000
		)
	},[])

	const transition = {
		type: "spring",
		stiffness: 50,
		damping: 20,
		mass: 2
	  };

	return (
		<div 
			className="flex flex-col gap-1 items-end text-grey font-[500] z-50 font-mada"
		>
			<div
				className=" select-none"
				
			>
				Delhi       
				<b> 🕒 {time.toUpperCase()} </b>
				GMT (+5:30)
			</div>

			<div 
				className="select-none capitalize"
			>
				🟢 Available 
				<b> {month}</b>
			</div>

			<a
				href={"mailto:vshon447@gmail.com"}
			>
				📧 <u> vshon447@gmail.com </u>
			</a>
		</div>
	)
}

export default Avaibility