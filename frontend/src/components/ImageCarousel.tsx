import Carousel from "react-material-ui-carousel";
import "../styles/imageCarousel.css";
import BorderedImage from "./BorderedImage";

function ImageCarousel() {
  const carouselItems = [
    {
      src: "https://nnlmhenetlckeqyvywiv.supabase.co/storage/v1/object/public/weebsite-server-db/files/travel1.png-efbbca0d259d597a11f84d3dbdea49e0.png",
    },
    {
      src: "https://nnlmhenetlckeqyvywiv.supabase.co/storage/v1/object/public/weebsite-server-db/files/climb.png-5a768ece656e1fc26e3e0eac9f3d140b.png",
    },
    {
      src: "https://nnlmhenetlckeqyvywiv.supabase.co/storage/v1/object/public/weebsite-server-db/files/snowboard.png-236b3db79d0ea2360ea0c3f3a0034c4e.png",
    },
    {
      src: "https://nnlmhenetlckeqyvywiv.supabase.co/storage/v1/object/public/weebsite-server-db/files/travel2.png-46cb35deb94c2a77ed1a6305f29b0a3a.png",
    },
  ];

  return (
    <div className="carousel-container">
      <div className="photo-clipper">
        <Carousel
          autoPlay={true}
          changeOnFirstRender={false}
          className="carousel-clipper"
          sx={{ width: "100%", padding: "0", margin: "0" }}
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
