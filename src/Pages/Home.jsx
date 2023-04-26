
import "./Home.scss";

export default function Home() {

    return <div id="home-page">

        <div id="logo-container">
            <img alt="Pathocalme logo" obj src={require("Assets/Images/logo.png")} />
        </div>
        <div class="bird-container bird-container--one">
            <div class="bird bird--one"></div>
        </div>

        <div class="bird-container bird-container--two">
            <div class="bird bird--two"></div>
        </div>

        <div class="bird-container bird-container--three">
            <div class="bird bird--three"></div>
        </div>

        <div class="bird-container bird-container--four">
            <div class="bird bird--four"></div>
        </div>
        <div id="amigos-container">
            <img alt="3 chevreaux" obj src={require("Assets/Images/3amigos.jpg")} />
        </div>



    </div>
}