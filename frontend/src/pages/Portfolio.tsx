import { useState, useEffect } from "react";
import { useLanguage } from "../hooks/useLanguage";
import endpoints, { fetchData } from "../utils/apiConfig";
import TimelineComponent from "../components/TimelineComponent";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import RepoList from "../components/RepoList";
import SkillsList from "../components/SkillsList";
import { SkillData } from "../types/skill.type";
import { TimelineData } from "../types/timeline.type";
import background from "../assets/background.mp4";
import "../styles/portfolio.css";

function Portfolio() {
  interface PortfolioData {
    title: string;
    jobsTitle: string;
    jobsText: string;
    jobsTimeline: TimelineData[];
    skillsTitle: string;
    skills: SkillData[];
    projectsTitle: string;
  }

  const { language } = useLanguage();

  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(
    null
  );

  useEffect(() => {
    const fetchPortfolioData = async () => {
      const data = await fetchData<PortfolioData>(
        endpoints.portfolio(language)
      );
      setPortfolioData(data);
      console.log(data);
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
          <div className="portfolio-title">{portfolioData.title}</div>
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
            <div className="text-title">{portfolioData.projectsTitle}</div>
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
