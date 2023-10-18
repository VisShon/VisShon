import DashboardButton from "../components/DashboardButton"
import ScrollBanner from "../components/ScrollBanner"

function Dashboard() {
	return (
		<div>
			<ScrollBanner/>
			
			<div>
				<DashboardButton/>
				<DashboardButton/>
				<DashboardButton/>
				<DashboardButton/>
				<DashboardButton/>
			</div>
		</div>
	)
}

export default Dashboard