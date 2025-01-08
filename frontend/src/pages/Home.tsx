import { useState, useEffect } from "react";
import { Typography, Link } from "@mui/material";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import { useLanguage } from "../hooks/useLanguage";
import { getApiUrl } from "../utils/apiConfig";
import background from "../assets/background.mp4";
import "../styles/home.css";

function Home() {
  interface HomeData {
    title: string;
    introductionTitle: string;
    introductionText: string;
    downloadButton: string;
    technologiesTitle: string;
    technologiesText: string;
    findmoreTitle: string;
    aboutMeText: string;
    aboutMeLink: string;
    portfolioText: string;
    portfolioLink: string;
    contactText: string;
    contactLink: string;
  }

  const { language } = useLanguage();

  const [homeData, setHomeData] = useState<HomeData | null>(null);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await fetch(
          getApiUrl(`/api/homes?locale=${language}`)
        );
        const data = await response.json();
        setHomeData(data.data[0]);
      } catch (error) {
        console.error("Error fetching about-me data: ", error);
      }
    };
    fetchHomeData();
  }, [language]);

  const handleDownload = async () => {
    try {
      const response = await fetch(getApiUrl(`/api/upload/files/13`));
      const fileData = await response.json();
      const fileUrl = getApiUrl(fileData.url);
      const fileResponse = await fetch(fileUrl);
      if (!fileResponse) {
        console.error("Error fetching actual file");
        return;
      }
      const blob = await fileResponse.blob();
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = fileData.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error fetching cv file: ", error);
    }
  };

  if (!homeData) {
    return <LoadingSpinner />;
  }

  const linkStyle = {
    color: "rgba(158, 109, 200, 1)",
    textDecoration: "none",
    fontWeight: "bold",
    "&:hover": {
      textDecoration: "underline",
    },
  };

  return (
    <div className="home-page">
      <video
        className="home-background"
        autoPlay
        loop
        muted
        preload="metadata"
        src={background}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
      <div className="home-container">
        <div className="home-title-background">
          <Typography
            variant="h2"
            fontWeight="bold"
            color="white"
            sx={{ fontSize: { xs: "5vw", sm: "5vw", md: "3.5vw" } }}
          >
            {homeData.title}
          </Typography>
        </div>
        <div className="home-content">
          <div className="intr-container">
            <div className="text-title">{homeData.introductionTitle}</div>
            <div className="text-content">{homeData.introductionText}</div>
            <div className="cv-download" onClick={handleDownload}>
              <FileDownloadRoundedIcon
                fontSize="large"
                sx={{
                  color: "white",
                  "&:hover": { color: "white" },
                }}
              />
              <div className="cv-download-text">{homeData.downloadButton}</div>
            </div>
          </div>
          <div className="container">
            <div className="text-title">{homeData.technologiesTitle}</div>
            <div className="text-content">{homeData.technologiesText}</div>
          </div>
          <div className="container">
            <ul className="tech-list">
              <li>
                <img
                  src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                  alt="React.js"
                />
              </li>
              <li>
                <img
                  src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
                  alt="typescript"
                />
              </li>
              <li>
                <img
                  src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white"
                  alt="Material-UI"
                />
              </li>
              <li>
                <img
                  src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                  alt="CSS3"
                />
              </li>
              <li>
                <img
                  src="https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white"
                  alt="Strapi"
                />
              </li>
            </ul>
          </div>
          <div className="more-container">
            <div className="text-title">{homeData.findmoreTitle}</div>
            <div className="text-content">
              <ul>
                <li>
                  {homeData.aboutMeText.split("*")[0]}
                  <Link href="/about-me" sx={linkStyle}>
                    {homeData.aboutMeLink}
                  </Link>
                  {homeData.aboutMeText.split("*")[1]}
                </li>
                <li>
                  {homeData.portfolioText.split("*")[0]}
                  <Link href="/portfolio" sx={linkStyle}>
                    {homeData.portfolioLink}
                  </Link>
                  {homeData.portfolioText.split("*")[1]}
                </li>
                <li>
                  {homeData.contactText.split("*")[0]}
                  <Link href="/contact" sx={linkStyle}>
                    {homeData.contactLink}
                  </Link>
                  {homeData.contactText.split("*")[1]}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="home-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
