import "../styles/footer.css";
import MediaLinks from "./MediaLinks";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-divider">
          <div className="footer-text">
            © 2025 Krystian Ćwikliński. All rights reserved.
          </div>
          <MediaLinks />
        </div>
      </div>
    </div>
  );
}

export default Footer;
