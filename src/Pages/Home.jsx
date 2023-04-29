
import BirdsFlying from "Components/BirdsFlying";
import "./Home.scss";

export default function Home() {

    return <div id="home-page">

        <div id="logo-container">
            <img alt="Pathocalme logo" src={require("Assets/Images/logo.png")} />
            <BirdsFlying />
        </div>
        <div id="amigos-container">
            <div id="picture-container" />
            {/* <img alt="3 chevreaux" src={require("Assets/Images/3amigos.jpg")} /> */}
        </div>



    </div>
}