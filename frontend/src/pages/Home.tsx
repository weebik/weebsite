import { useState, useEffect } from "react";
import { Link } from "@mui/material";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import { useLanguage } from "../hooks/useLanguage";
import background from "../assets/background.mp4";
import "../styles/home.css";
import TechList from "../components/TechList";
import endpoints, { downloadFile, fetchData } from "../utils/apiConfig";

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
      const data = await fetchData<HomeData>(endpoints.home(language));
      setHomeData(data);
    };
    fetchHomeData();
  }, [language]);

  const handleDownload = async () => {
    await downloadFile(language);
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
          <div className="home-title">{homeData.title}</div>
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
          <div className="tech-container">
            <div className="text-title">{homeData.technologiesTitle}</div>
            <div className="text-content">{homeData.technologiesText}</div>
          </div>
          <div className="tech-container">
            <TechList />
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
