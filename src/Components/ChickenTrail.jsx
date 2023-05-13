import { Grid, Container } from "@mui/material";
import { ReactComponent as ChickenFootPrint } from "Assets/Images/chickenTrail.svg";
import "./ChickenTrail.scss";

export default function ChickenTrail() {
    return <div id="chicken-trail">
        <Container fixed>
            <Grid container spacing={2} justifyContent="space-between" >
                {[...Array(15)].map((x, i) =>
                    <ChickenFootPrint />
                )}
            </Grid>

        </Container>
    </div>
}