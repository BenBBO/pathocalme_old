
import BirdsFlying from "Components/BirdsFlying";
import "./Home.scss";
import Egg from "Components/Egg";

export default function Home() {

    return <div id="home-page">

        <div id="logo-container">
            <img alt="Pathocalme logo" src={require("Assets/Images/logo.png")} />
            <BirdsFlying />
        </div>

        <div id="eggs">
            <Egg eggColor="#a5b6a6" title="Animation" target="/animation" />
            <Egg eggColor="#bd6966" title="Médiation" target="/mediation" align="flex-end" />
            <Egg title="Pédagogie" target="/pedagogie" />
        </div>

    </div>
}