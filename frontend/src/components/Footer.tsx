import { Typography } from "@mui/material";
import "../styles/footer.css";
import MediaLinks from "./MediaLinks";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-divider">
          <Typography variant="overline">
            © 2024 Krystian Ćwikliński. All rights reserved.
          </Typography>
          <MediaLinks />
        </div>
      </div>
    </div>
  );
}

export default Footer;
