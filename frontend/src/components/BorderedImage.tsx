import "../styles/borderedImage.css";
import { BorderedImageProps } from "../types/borderedImage.type";

function BorderedImage({ src, alt }: BorderedImageProps) {
  return (
    <>
      <img
        className="image"
        src={src}
        alt={alt}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
      <svg width="0" height="0" viewBox="0 0 1 1">
        <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
          <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5" />
        </clipPath>
      </svg>
    </>
  );
}

export default BorderedImage;
