import Egg from "Components/Egg";
import "./Home.scss";
import { Avatar, Container, Grid } from "@mui/material";
import ChickenTrail from "Components/ChickenTrail";
import { Link } from "react-router-dom";
import HomeCarousel from "Components/HomeCarousel";

export default function Home() {

    return <section id="home">
        <HomeCarousel />
        <div className="home-description">
            <Container fixed>
                <h2>À quelques minutes de Bourgoin-Jallieu, Animation, Médiation et Pédagogie de 0 à 99+ ans</h2>
                <Grid container spacing={2} alignItems="center">
                    <Grid item md={8} xs={12} justifyContent="center">
                        <p>
                            Barbara et ses animaux vous acceuille à <strong>Trept</strong> rajouter du contenu
                            ici pour faire environ un paragraphe de texte.
                        </p>
                        <p>
                            Rejoignez nous à la <strong>mini-ferme</strong> pour un moment de partage avec nos animaux.
                            Rajouter du contenu de présentation ici pour faire un paragraphe de texte.
                        </p>
                        <p className="visite">
                            Visite simple, tarif libre et boissons à 2€ à partir de 17h
                            <br />
                            Ouvert sur rendez-vous du <strong>mardi au dimanche</strong>
                        </p>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Avatar src={require("Assets/Images/bab.jpg")} sx={{ width: "30vh", height: "30vh" }} />
                    </Grid>
                </Grid>
            </Container>
        </div>
        <Grid container>
            <Grid item md={4} xs={12} className="first-egg">
                <Link to="/animation">
                    <img src={require("Assets/Images/pate_oiseau.png")} style={{ width: "30vh", height: "30vh" }} />
                    <span>Animation</span>
                </Link>

                {/* <Egg eggColor="#a5b6a6" title="Animation" target="/animation" /> */}
            </Grid>
            <Grid item md={4} xs={12} className="second-egg">
                <Link to="/mediation">
                    <img src={require("Assets/Images/pate_cochon.png")} style={{ width: "30vh", height: "30vh" }} />
                    <span>Médiation</span>
                </Link>
                {/* <Egg eggColor="#bd6966" title="Médiation" target="/mediation" /> */}
            </Grid>
            <Grid item md={4} xs={12} className="third-egg">
                <Link to="/pedagogie">
                    <img src={require("Assets/Images/pate_chien.png")} style={{ width: "30vh", height: "30vh" }} />
                    <span>Pédagogie</span>
                </Link>
                {/* <Egg title="Pédagogie" target="/pedagogie" /> */}
            </Grid>
        </Grid>

        <div className="home-bottom">
            <ChickenTrail />
            <Container fixed>
                <Grid container spacing={2} alignItems="stretch" justifyContent="center">
                    <Grid item>
                        <img src={require("Assets/Images/logo.png")} />
                    </Grid>
                    <Grid item className="bottom-description">
                        <p className="bottom-title">
                            Path'O Calme
                        </p>
                        <p>
                            185 route de Bourgoin - 38490 TREPT
                            <br />
                            <i>Sur le terrain de l'<strong>Isle aux chiens</strong></i>
                        </p>
                        <p className="bottom-contact">
                            <a href="tel:0652867160">06 52 86 71 60</a>
                        </p>
                        <p className="bottom-contact">
                            <a href="mailto:babnana38@gmail.com">babnana38@gmail.com</a>
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </div>
    </section >
}