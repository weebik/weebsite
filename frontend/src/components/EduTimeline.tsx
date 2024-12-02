import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import Typography from "@mui/material/Typography";
import { useLanguage } from "../hooks/useLanguage";

function EduTimeline() {
  const { language } = useLanguage();
  const translations = {
    pl: {
      ed1: {
        title: "Szkoła Podstawowa nr 9",
        location: "Legnica, Polska",
        date: "2010 - 2016",
      },
      ed2: {
        title: "Gimnazjum św. Franciszka z Asyżu",
        location: "Legnica, Polska",
        date: "2016 - 2019",
      },
      ed3: {
        title: "Liceum Ogólnokształcące nr 1",
        location: "Legnica, Polska",
        date: "2019 - 2022",
      },
      ed4: {
        title: "Uniwersytet Wrocławski",
        location: "Wrocław, Polska",
        date: "2022 - teraz",
      },
    },
    en: {
      ed1: {
        title: "Primary School no. 9",
        location: "Legnica, Poland",
        date: "2010 - 2016",
      },
      ed2: {
        title: "Secondary School Saint Francis of Assisi",
        location: "Legnica, Poland",
        date: "2016 - 2019",
      },
      ed3: {
        title: "High School no. 1",
        location: "Legnica, Poland",
        date: "2019 - 2022",
      },
      ed4: {
        title: "University Of Wrocław",
        location: "Wrocław, Poland",
        date: "2022 - now",
      },
    },
  };

  const educationData = Object.values(translations[language]);

  return (
    <Timeline
      position="alternate"
      sx={{ padding: "0", width: "100%", color: "white" }}
    >
      {educationData.map((edu, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="#D4B8F1"
          >
            {edu.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ backgroundColor: "#9E6DC8" }}>
              <SchoolRoundedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              {edu.title}
            </Typography>
            <Typography>{edu.location}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default EduTimeline;
