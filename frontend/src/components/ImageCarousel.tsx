import Carousel from "react-material-ui-carousel";
import "../styles/imageCarousel.css";
import BorderedImage from "./BorderedImage";

interface ImageCarouselProps {
  items: { url: string }[];
}

function ImageCarousel({ items }: ImageCarouselProps) {
  return (
    <div className="carousel-container">
      <div className="photo-clipper">
        <Carousel
          changeOnFirstRender={true}
          autoPlay={true}
          className="carousel-clipper"
          sx={{ height: "100%", width: "100%", padding: "0", margin: "0" }}
        >
          {items.map((item: { url: string }, index) => (
            <BorderedImage key={index} src={item.url} alt="Image not found" />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ImageCarousel;
