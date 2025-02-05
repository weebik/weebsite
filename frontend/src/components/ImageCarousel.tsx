import Carousel from "react-material-ui-carousel";
import "../styles/imageCarousel.css";
import BorderedImage from "./BorderedImage";
import { carouselItems } from "../consts/carouselItems";

function ImageCarousel() {
  return (
    <div className="carousel-container">
      <div className="photo-clipper">
        <Carousel
          changeOnFirstRender={true}
          autoPlay={true}
          className="carousel-clipper"
          sx={{ height: "100%", width: "100%", padding: "0", margin: "0" }}
        >
          {carouselItems.map((item, index) => (
            <BorderedImage key={index} src={item.src} alt="carousel-item" />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ImageCarousel;
