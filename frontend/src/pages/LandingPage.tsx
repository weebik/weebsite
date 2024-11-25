import { Typography } from "@mui/material";
import "../styles/landingPage.css";

function LandingPage() {
  return (
    <>
      <video
        className="background-video"
        autoPlay
        loop
        muted
        preload="metadata"
        onContextMenu={(e) => e.preventDefault()}
      >
        <source src="/assets/background.mp4" type="video/mp4" />
      </video>
      <div className="landing-container">
        <div className="landing-images">
          <img
            className="avatar"
            src="/assets/avatar.png"
            alt="avatar"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
        <div className="landing-content">
          <Typography sx={{ fontWeight: "bolder" }} variant="h1"></Typography>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
