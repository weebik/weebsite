import { Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

function MediaLinks() {
  return (
    <Box display="flex" alignItems="center" gap={2}>
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
    </Box>
  );
}

export default MediaLinks;
