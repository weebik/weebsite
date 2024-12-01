import Footer from "../components/Footer";
import "../styles/portfolio.css";

function Portfolio() {
  return (
    <>
      <video
        className="portfolio-background"
        autoPlay
        loop
        muted
        preload="metadata"
        src="/assets/background.mp4"
        onContextMenu={(e) => e.preventDefault()}
      />
      <div className="portfolio-page">
        <h1>Homepage</h1>
      </div>
      <div className="portfolio-footer">
        <Footer />
      </div>
    </>
  );
}

export default Portfolio;
