import { Link } from "react-router-dom";
import "./Egg.scss";

export default function Egg({ eggColor, title = "Test", align = "center", target = "#" }) {

    return <div className="eggContainer" style={{ "alignSelf": align }}>
        <Link to={target} >
            <div className="eggWrapper">
                <div className="chickHead"><div className="eyeDiv"></div><div className="eyeDiv"></div><div className="beakDiv"></div></div>
                <div className="eggDiv" style={{ "backgroundColor": eggColor }}></div>
                <div className="eggTop" style={{ "backgroundColor": eggColor }}></div>
            </div>
            <div className="eggTitle">{title}</div>
        </Link >
    </div>
}