
import BirdsFlying from "Components/BirdsFlying";
import "./Home.scss";
import Egg from "Components/Egg";
import { Grid } from "@mui/material";

export default function Home() {

    return <div id="home-page">

        <div id="logo-container">
            <img alt="Pathocalme logo" src={require("Assets/Images/logo.png")} />
            <BirdsFlying />
        </div>

        {/* <div id="eggs">
            <Egg eggColor="#a5b6a6" title="Animation" target="/animation" />
            <Egg eggColor="#bd6966" title="Médiation" target="/mediation" align="flex-end" />
            <Egg title="Pédagogie" target="/pedagogie" />
        </div> */}
        <Grid container className="home-item-container" style={{
            backgroundColor: "white"
        }}>
            <Grid item xs={6} sx={{ p: 2 }}>
                <Egg eggColor="#a5b6a6" title="Animation" target="/animation" />
            </Grid>
            <Grid xs={6}>
                <img alt="animation" className="right-aligned" src={require("Assets/Images/animation.jpg")} />
            </Grid>
        </Grid>
        <Grid container className="home-item-container" style={{
            backgroundColor: "white"
        }}>
            <Grid item xs={6}>
                <img alt="animation" className="left-aligned" src={require("Assets/Images/mediation.jpg")} />
            </Grid>
            <Grid xs={6} sx={{ p: 2 }}>
                <Egg eggColor="#bd6966" title="Médiation" target="/mediation" />
            </Grid>
        </Grid>

    </div >
}