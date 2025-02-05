import { useLanguage } from "../hooks/useLanguage";
import { useEffect, useState } from "react";
import endpoints, { fetchData } from "../utils/apiConfig";
import ImageCarousel from "../components/ImageCarousel";
import BorderedImage from "../components/BorderedImage";
import TimelineComponent from "../components/TimelineComponent";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import background from "../assets/background.mp4";
import { TimelineData } from "../types/timeline.type";
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
  const [aboutMeData, setAboutMeData] = useState<AboutMeData | null>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      const data = await fetchData<AboutMeData>(endpoints.aboutMe(language));
      setAboutMeData(data);
    };
    fetchAboutData();
  }, [language]);

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
              src={
                "https://nnlmhenetlckeqyvywiv.supabase.co/storage/v1/object/public/weebsite-server-db/files/me.png-87b4c994b3f49dc5d748aa101f8ab891.png"
              }
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
