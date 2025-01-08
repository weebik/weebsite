import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import TimelineComponent, {
  TimelineData,
} from "../components/TimelineComponent";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import { useLanguage } from "../hooks/useLanguage";
import { getApiUrl } from "../utils/apiConfig";
import background from "../assets/background.mp4";
import "../styles/portfolio.css";
import SkillsList from "../components/SkillsList";
import { SkillData } from "../types/skill.type";
import RepoList from "../components/RepoList";

function Portfolio() {
  interface PortfolioData {
    title: string;
    jobsTitle: string;
    jobsText: string;
    jobsTimeline: TimelineData[];
    skillsTitle: string;
    skills: SkillData[];
  }

  const { language } = useLanguage();

  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(
    null
  );

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch(
          getApiUrl(`/api/portfolios?locale=${language}`)
        );
        const data = await response.json();
        setPortfolioData(data.data[0]);
      } catch (error) {
        console.error("Error fetching about-me data: ", error);
      }
    };
    fetchPortfolioData();
  }, [language]);

  if (!portfolioData) {
    return <LoadingSpinner />;
  }

  return (
    <div className="portfolio-page">
      <video
        className="portfolio-background"
        autoPlay
        loop
        muted
        preload="metadata"
        src={background}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
      <div className="portfolio-container">
        <div className="portfolio-title-background">
          <Typography
            variant="h2"
            fontWeight="bold"
            color="white"
            sx={{ fontSize: { xs: "5vw", sm: "5vw", md: "3.5vw" } }}
          >
            {portfolioData.title}
          </Typography>
        </div>
        <div className="portfolio-content">
          <div className="container">
            <div className="text-title">{portfolioData.jobsTitle}</div>
            <div className="text-content">{portfolioData.jobsText}</div>
          </div>
          <div className="container">
            <TimelineComponent timelineData={portfolioData.jobsTimeline} />
          </div>
          <div className="wide-container">
            <div className="text-title">{portfolioData.skillsTitle}</div>
            <SkillsList skillData={portfolioData.skills} />
          </div>
          <div className="wide-container">
            <div className="text-title">My Projects</div>
            <RepoList />
          </div>
        </div>
        <div className="portfolio-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
