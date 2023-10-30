import Seperator from "../components/GradientWave/Seperator"
import Reveiw from "../components/Reveiw"
import ScrollBanner from "../components/ScrollBanner"

function Reviews() {
	return (
		<div className="w-screen h-screen relative px-48 flex flex-col items-center select-none font-mada text-charcoal font-[400] gap-20 justify-between">

			<Seperator
				top
			/>
			
			<div className="text-5xl w-[40%] self-start capitalize flex relative items-center justify-center">
				<h2>
					Here's what some awesome people have said about working with me.
				</h2>
				<img
					className="absolute -bottom-5 ml-[30%]"
					src="./comma.svg"
				/>
			</div>

			<div className="grid grid-cols-2 gap-x-64 gap-16 grid-flow-row-dense">
				<Reveiw 
					review={"In a world of code and innovation, I reign, With awesome projects, I break every chain. No room for the dull, only room for the bright, Crafting modern websites, I take flight."}
					author={"-Mohit Khanna, StayBook"}
				/>
				<Reveiw 
					review={"In a world of code and innovation, I reign, With awesome projects, I break every chain. No room for the dull, only room for the bright, Crafting modern websites, I take flight."}
					author={"-Mohit Khanna, StayBook"}
				/>
				<Reveiw 
					review={"In a world of code and innovation, I reign, With awesome projects, I break every chain. No room for the dull, only room for the bright, Crafting modern websites, I take flight."}
					author={"-Mohit Khanna, StayBook"}
				/>
				<Reveiw 
					review={"In a world of code and innovation, I reign, With awesome projects, I break every chain. No room for the dull, only room for the bright, Crafting modern websites, I take flight."}
					author={"-Mohit Khanna, StayBook"}
				/>
				<Reveiw 
					review={"In a world of code and innovation, I reign, With awesome projects, I break every chain. No room for the dull, only room for the bright, Crafting modern websites, I take flight."}
					author={"-Mohit Khanna, StayBook"}
				/>

			</div>


			<ScrollBanner/>

		</div>
	)
}

export default Reviews