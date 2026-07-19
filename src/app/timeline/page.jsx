"use client";
import { TimelineActivityContext } from "@/context/TimelineActiviryContext";
import { useContext } from "react";

const Timeline = () => {
  const { activity, setActivity } = useContext(TimelineActivityContext);
  console.log(activity, "activity");
  return (
    <div className="min-h-[70vh]">
      <h2>This is timeline page</h2>
    </div>
  );
};

export default Timeline;
