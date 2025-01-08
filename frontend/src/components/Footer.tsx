import { Typography, Box } from "@mui/material";
import footerBackground from "../assets/footer.svg";
import "../styles/footer.css";
import MediaLinks from "./MediaLinks";

function Footer() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${footerBackground})`,
        backgroundSize: "cover",
        width: "100%",
        height: "120px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "auto",
        zIndex: "1000",
      }}
    >
      <Box
        sx={{
          color: "#fff",
          width: "100%",
        }}
      >
        <div className="footer-divider">
          <Typography variant="overline">
            © 2024 Krystian Ćwikliński. All rights reserved.
          </Typography>
          <MediaLinks />
        </div>
      </Box>
    </Box>
  );
}

export default Footer;
