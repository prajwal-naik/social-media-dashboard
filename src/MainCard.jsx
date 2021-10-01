import "./MainCard.css";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function MainCard({title, stats, status, handle, Theme}) {
    return (
        <div className = {`mainCardContainer ${title}`}>
            <div className={Theme ? "mainCard" : "mainCard-dark"}>
                <div className="iconHandle">
                    <img src = {`/images/icon-${title}.svg`} alt = "appIcon"/>
                    <p style = {{fontSize: "14px", fontWeight: "700"}}>{`${handle}`}</p>
                </div>
                <div className="statistics">
                    <h1 className = {Theme ? "mainCardStats" : "mainCardStats-dark"}>{stats}</h1>
                    <p style = {{fontSize: "14px", fontWeight: "400"}}>{title === "youtube" ? "S U B S C R I B E R S" : "F O L L O W E R S"}</p>
                </div>
                <div className={`trend ${status > 0? "positive" : "negative"}`}>
                    <p>{status > 0 ? <ArrowDropUpIcon/> : <ArrowDropDownIcon />}</p>
                    <p>{Math.abs(status)}</p>
                    <p>Today</p>
                </div>
            </div>
        </div>
    )
}

export default MainCard
