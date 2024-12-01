import { Typography, Box } from "@mui/material";
import footerBackground from "../assets/footer.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import "../styles/footer.css";

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
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <FacebookIcon
              fontSize="large"
              sx={{ cursor: "pointer", "&:hover": { color: "#1877f2" } }}
            />
            <LinkedInIcon
              fontSize="large"
              sx={{ cursor: "pointer", "&:hover": { color: "#0a66c2" } }}
            />
            <GitHubIcon
              fontSize="large"
              sx={{ cursor: "pointer", "&:hover": { color: "#171515" } }}
            />
            <InstagramIcon
              fontSize="large"
              sx={{
                cursor: "pointer",
                "&:hover": { color: "#e4405f" },
              }}
            />
          </Box>
        </div>
      </Box>
    </Box>
  );
}

export default Footer;
