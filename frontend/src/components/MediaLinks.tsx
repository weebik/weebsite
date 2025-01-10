import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../styles/mediaLinks.css";

function MediaLinks() {
  return (
    <div className="media-links">
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
        sx={{ cursor: "pointer", "&:hover": { color: "#e4405f" } }}
      />
    </div>
  );
}

export default MediaLinks;
