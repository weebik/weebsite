import { useLanguage } from "../hooks/useLanguage";
import { useError } from "../hooks/useError";
import { useEffect, useState } from "react";
import ImageCarousel from "../components/ImageCarousel";
import BorderedImage from "../components/BorderedImage";
import TimelineComponent, {
  TimelineData,
} from "../components/TimelineComponent";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import { getApiUrl } from "../utils/apiConfig";
import background from "../assets/background.mp4";
import "../styles/aboutMe.css";

function AboutMe() {
  interface AboutMeData {
    title: string;
    introductionTitle: string;
    introductionText: string;
    educationTitle: string;
    educationText: string;
    hobbiesTitle: string;
    hobbiesText: string;
    educationTimeline: TimelineData[];
  }

  const { language } = useLanguage();
  const { setError } = useError();
  const [aboutMeData, setAboutMeData] = useState<AboutMeData | null>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch(
          getApiUrl(`/api/about-mes?locale=${language}`)
        );
        const data = await response.json();
        setAboutMeData(data.data[0]);
      } catch (error) {
        setError("Unable to load data. Please try again later.");
        console.error("Error fetching about-me data: ", error);
      }
    };
    fetchAboutData();
  }, [language, setError]);

  if (!aboutMeData) {
    return <LoadingSpinner />;
  }

  return (
    <div className="about-page">
      <video
        className="about-background"
        autoPlay
        loop
        muted
        preload="metadata"
        src={background}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
      <div className="about-container">
        <div className="about-title-background">
          <div className="about-title">{aboutMeData.title}</div>
        </div>
        <div className="about-content">
          <div className="photo-container">
            <BorderedImage
              src={`http://localhost:1337/uploads/myphoto_0cadaccce4.png`}
              alt="avatar"
            />
          </div>
          <div className="container">
            <div className="text-title">{aboutMeData.introductionTitle}</div>
            <div className="text-content">{aboutMeData.introductionText}</div>
          </div>
          <div className="container">
            <div className="text-title">{aboutMeData.educationTitle}</div>
            <div className="text-content">{aboutMeData.educationText}</div>
          </div>
          <TimelineComponent timelineData={aboutMeData.educationTimeline} />
          <div className="container">
            <ImageCarousel />
          </div>
          <div className="container">
            <div className="text-title">{aboutMeData.hobbiesTitle}</div>
            <div className="text-content">{aboutMeData.hobbiesText}</div>
          </div>
        </div>
        <div className="about-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
