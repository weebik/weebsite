import Carousel from 'react-material-ui-carousel';
import '../styles/imageCarousel.css';
import BorderedImage from './BorderedImage';
import { useState } from 'react';

interface ImageCarouselProps {
  items: { url: string }[];
}

function ImageCarousel({ items }: ImageCarouselProps) {
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);
  return (
    <div className="carousel-container">
      <img
        src={items[0].url}
        onLoad={() => setFirstImageLoaded(true)}
        style={{ display: 'none' }}
      />
      {firstImageLoaded ? (
        <Carousel
          swipe={true}
          changeOnFirstRender={true}
          autoPlay={true}
          className="carousel-clipper"
          sx={{ height: '100%', width: '100%', padding: '0', margin: '0' }}
        >
          {items.map((item: { url: string }, index) => (
            <BorderedImage key={index} src={item.url} alt="Image not found" />
          ))}
        </Carousel>
      ) : (
        <div className="carousel-error">
          Error: Cannot load carousel component
        </div>
      )}
    </div>
  );
}

export default ImageCarousel;
