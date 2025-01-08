import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import Typography from "@mui/material/Typography";

interface TimelineComponentProps {
  timelineData: TimelineData[];
}

export interface TimelineData {
  title: string;
  description: string;
  date: string;
}

function TimelineComponent({ timelineData }: TimelineComponentProps) {
  return (
    <Timeline
      position="alternate"
      sx={{ padding: "0", width: "100%", color: "white" }}
    >
      {timelineData.map((data, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="#D4B8F1"
          >
            {data.date}
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
              {data.title}
            </Typography>
            <Typography>{data.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default TimelineComponent;
