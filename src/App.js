import './App.css';
import MainCard from './MainCard';
import OverviewCard from './OverviewCard';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';


function App() {

	const [Theme, setTheme] = useState(true);

	const handleThemeChange = (e) => {
		e.preventDefault();
		setTheme(!Theme);
	}

	return (
		<div className = {Theme ? "app" : "app-dark"}>
			<div className = {Theme ? "appBackground" : "appBackground-dark	"}></div>
			<div className = "pseudoBody">
				<div className = "container">
					<div className="header">
						<div>
							<h2 style={{fontWeight:700}} className = {Theme ? "socialMediaHeader" : "socialMediaHeader-dark	"}>Social Media Dashboard</h2>
							<p className = "totalFollowersText">Total followers: 23004</p>
						</div>
						<div className = "themeToggler">
							<p>{!Theme?"Light" : "Dark"} Mode</p>
							{/* <Switch {...label} onChange = {handleChange}/> */}
							<ThemeToggle handleThemeChange = {handleThemeChange}/>
						</div>
					</div>
					<div className="mainCards">
						<MainCard title = {"facebook"}stats = {1987} status = {12} handle = {"@nathanf"} Theme = {Theme}/>
						<MainCard title = {"twitter"} stats = {1044} status = {99} handle = {"@nathanf"} Theme = {Theme}/>
						<MainCard title = {"instagram"} stats = {"11k"} status = {1099} handle = {"@realnathanf"} Theme = {Theme}/>
						<MainCard title = {"youtube"} stats = {8239} status = {-144} handle = {"Nathan F."} Theme = {Theme}/>
					</div>
					<div className="overview">
						<div className={Theme ? "overviewHeading" : "overviewHeading-dark"}>
							<h2>Overview - Today</h2>
						</div>
						<div className="overviewCards">
							<OverviewCard app = {"facebook"} stat = {87} statName = {"Page Views"} trend = {3} Theme = {Theme}/>
							<OverviewCard app = {"facebook"} stat = {52} statName = {"Likes"} trend = {-2} Theme = {Theme}/>
							<OverviewCard app = {"instagram"} stat = {5462} statName = {"Likes"} trend = {2257} Theme = {Theme} />
							<OverviewCard app = {"instagram"} stat = {"52k"} statName = {"Profile Views"} trend = {1375} Theme = {Theme} />
							<OverviewCard app = {"twitter"} stat = {117} statName = {"Retweets"} trend = {303} Theme = {Theme}/>
							<OverviewCard app = {"twitter"} stat = {507} statName = {"Likes"} trend = {553} Theme = {Theme} />
							<OverviewCard app = {"youtube"} stat = {107} statName = {"Likes"} trend = {-107} Theme = {Theme}/>
							<OverviewCard app = {"Youtube"} stat = {1407} statName = {"Total Views"} trend = {-12} Theme = {Theme} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
