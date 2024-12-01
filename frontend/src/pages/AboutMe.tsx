import "../styles/aboutme.css";
import Footer from "../components/Footer";

function AboutMe() {
  return (
    <>
      <video
        className="about-background"
        autoPlay
        loop
        muted
        preload="metadata"
        src="/assets/background.mp4"
        onContextMenu={(e) => e.preventDefault()}
      />
      <div className="about-page">
        <h1>Homepage</h1>
      </div>
      <div className="about-footer">
        <Footer />
      </div>
    </>
  );
}

export default AboutMe;
