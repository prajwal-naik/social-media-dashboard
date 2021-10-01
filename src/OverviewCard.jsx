import "./OverviewCard.css";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function OverviewCard({app, stat, statName, trend, Theme}) {
    return (
        <div className="overviewCardContainer"> 
            <div className = {Theme ? "overviewCard" : "overviewCard-dark"}>
                <div className="statNameIcon">
                    <p style = {{fontSize: "14px", fontWeight: 400}}>{statName}</p>
                    <img src = {`/images/icon-${app}.svg`} alt = "appIcon"/>
                </div>
                <div className="statTrend">
                    <h2 style = { Theme ? {color: "hsl(230, 17%, 14%)"} : {color: "white"}}>{stat}</h2>
                    <div style = {{display: "flex", fontSize: "12px", alignItems: "center", fontWeight: 700}} className={`${trend > 0? "positive" : "negative"}`}>
                        <p>{trend > 0 ? <ArrowDropUpIcon/> : <ArrowDropDownIcon />}</p>
                        <p>{Math.abs(trend)}</p>
                        <p>%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverviewCard
