import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/mediaLinks.css';

function MediaLinks() {
  const style = { cursor: 'pointer', '&:hover': { color: 'var(--pri2)' } };
  return (
    <div className="media-links">
      <a
        href="https://www.facebook.com/weebiik"
        target="_blank"
        rel="noreferrer"
      >
        <FacebookIcon fontSize="large" sx={style} />
      </a>
      <a
        href="https://www.linkedin.com/in/weebik"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon fontSize="large" sx={style} />
      </a>
      <a href="https://github.com/weebik" target="_blank" rel="noreferrer">
        <GitHubIcon fontSize="large" sx={style} />
      </a>
      <a
        href="https://www.instagram.com/_weebik_"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramIcon fontSize="large" sx={style} />
      </a>
    </div>
  );
}

export default MediaLinks;
