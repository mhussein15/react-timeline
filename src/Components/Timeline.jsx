import {
  VerticalTimeline,
} from "react-vertical-timeline-component";
import TimelineData from "../timelineInformation"
import TimelineElement from "./TimelineElement"
export default function Timeline() {

  const timelineElements = TimelineData.map(timelineElement =>(
      <TimelineElement key={timelineElement.id} info={timelineElement}/>
  ))
  return (
    <VerticalTimeline>
      {timelineElements}
    </VerticalTimeline>
  );
}
