import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./HomeCarousel.scss";

export default function HomeCarousel() {


    return <div id="carousel-container">
        <Carousel autoPlay={true} infiniteLoop={true}
            showThumbs={false} showStatus={false}>
            <div>
                <img src={require("Assets/Images/3amigos.jpg")} />
            </div>
            <div>
                <img src={require("Assets/Images/hamac.jpg")} />
            </div>
            <div>
                <img src={require("Assets/Images/mediation.jpg")} />
            </div>
        </Carousel>
        <div className="carousel-text">
            <h2>Bienvenue chez </h2>
            <h1>Path'O Calme</h1>
        </div>
    </div>
}