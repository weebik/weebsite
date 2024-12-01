import Footer from "../components/Footer";
import "../styles/home.css";

function Home() {
  return (
    <>
      <video
        className="home-background"
        autoPlay
        loop
        muted
        preload="metadata"
        src="/assets/background.mp4"
        onContextMenu={(e) => e.preventDefault()}
      />
      <div className="home-page">
        <h1>Homepage</h1>
      </div>
      <div className="home-footer">
        <Footer />
      </div>
    </>
  );
}
export default Home;
