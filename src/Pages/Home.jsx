import Egg from "Components/Egg";
import "./Home.scss";
import { Avatar, Container, Grid } from "@mui/material";

export default function Home() {

    return <>

        <section id="home">
            <div className="home-picture">
                <div className="image-text">
                    <h2>Bienvenue chez </h2>
                    <h1>Path'O Calme</h1>
                </div>
            </div>
            <div className="home-description">
                <Container fixed>
                    <h2>À quelques minutes de Bourgoin-Jallieu, Animation, Médiation et Pédagogie de 0 à 99+ ans</h2>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item md={8} xs={12}>
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
                            <Avatar src={require("Assets/Images/barbara.jpg")} sx={{ width: "20em", height: "20em" }} />
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Grid container sx={{padding:"1em"}}>
                <Grid item md={4} xs={12}>
                    <Egg  eggColor="#a5b6a6" title="Animation" target="/animation" />
                </Grid>
                <Grid item md={4} xs={12}>
                    <Egg eggColor="#bd6966" title="Médiation" target="/mediation" />
                </Grid>
                <Grid item md={4} xs={12}>
                    <Egg title="Pédagogie" target="/pedagogie" />
                </Grid>
            </Grid>
        </section >
    </>
}