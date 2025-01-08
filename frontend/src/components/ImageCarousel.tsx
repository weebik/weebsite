import Carousel from "react-material-ui-carousel";
import "../styles/imageCarousel.css";
import BorderedImage from "./BorderedImage";

function ImageCarousel() {
  const carouselItems = [
    {
      src: "http://localhost:1337/uploads/travel1_9ff4c53558.png",
    },
    {
      src: "http://localhost:1337/uploads/snow1_661507591c.png",
    },
    {
      src: "http://localhost:1337/uploads/climb_0827140de2.png",
    },
    {
      src: "http://localhost:1337/uploads/travel2_d37a235799.png",
    },
    {
      src: "http://localhost:1337/uploads/snow2_140b4fd2eb.png",
    },
    {
      src: "http://localhost:1337/uploads/cat_5342361d6d.png",
    },
  ];

  return (
    <div className="carousel-container">
      <div className="photo-clipper">
        <Carousel
          className="carousel-clipper"
          sx={{ width: "100%", padding: "0", margin: "0" }}
        >
          {carouselItems.map((item, index) => (
            <BorderedImage key={index} src={item.src} alt="carousel" />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ImageCarousel;
