import { VerticalTimelineElement } from "react-vertical-timeline-component";
import {TimelineCardData} from "../styles.js";
export default function TimelineElement(props) {
  const { info } = props;
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#FCBB6D", color: "#f5f6fa" }}
      contentArrowStyle={{ borderRight: "7px solid  #FCBB6D" }}
      date={info.date}
      iconStyle={{ background: "#D8737F" }}
    >
      <TimelineCardData>
        <h3>{info.title}</h3>
        <h4>{info.subtitle}</h4>
        <p>{info.paragraph}</p>
      </TimelineCardData>
    </VerticalTimelineElement>
  );
}
