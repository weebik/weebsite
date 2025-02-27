import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import '../styles/timelineComponent.css';
import { TimelineComponentProps } from '../types/timeline.type';

function TimelineComponent({ timelineData, icon }: TimelineComponentProps) {
  return (
    <Timeline
      position="alternate"
      sx={{
        padding: '0',
        justifyContent: 'center',
        width: '100%',
        color: 'white',
      }}
    >
      {timelineData.map((data, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="#D4B8F1"
          >
            {data.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ backgroundColor: '#9E6DC8' }}>
              {icon == true ? <SchoolRoundedIcon /> : <WorkRoundedIcon />}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '5px', px: 2 }}>
            <div className="timeline-title">{data.title}</div>
            <div className="timeline-description">{data.description}</div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default TimelineComponent;
