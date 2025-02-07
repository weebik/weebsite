export interface TimelineComponentProps {
  timelineData: TimelineData[];
  icon?: boolean;
}

export interface TimelineData {
  title: string;
  description: string;
  date: string;
}
