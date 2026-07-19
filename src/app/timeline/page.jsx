"use client";
import { TimelineActivityContext } from "@/context/TimelineActiviryContext";
import { useContext, useState } from "react";
import callIcon from "../../assets/call.png";
import textIcon from "../../assets/text.png";
import videoIcon from "../../assets/video.png";
import Image from "next/image";

const Timeline = () => {
  const { activity, setActivity } = useContext(TimelineActivityContext);
  const [filter, setFilter] = useState("all");
  const sortedActivity = [...activity].sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp),
  );
  const filteredActivity =
    filter === "all"
      ? sortedActivity
      : sortedActivity.filter((entry) => entry.type === filter);
  return (
    <div className="min-h-[70vh] my-10 space-y-5 max-w-277.5 mx-auto">
      <div className="space-y-3">
        <h2 className="text-5xl font-bold">Timeline</h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="select focus:border-none bg-transparent border-2"
        >
          <option disabled>Filter timeline</option>
          <option value="call">Call only</option>
          <option value="text">Text only</option>
          <option value="video">Video only</option>
          <option value="all">No filter</option>
        </select>
      </div>
      <div className="flex flex-col justify-between items-center gap-4">
        {filteredActivity.length === 0 ? (
          <div className="p-6 w-full flex justify-center items-center bg-white rounded-xl gap-3 text-center">
            <h2 className="text-center font-bold text-4xl">
              There's no data available to show
            </h2>
          </div>
        ) : (
          filteredActivity.map((entry, ind) => (
            <div
              key={ind}
              className="p-6 w-full flex justify-start items-center bg-white rounded-xl gap-3"
            >
              <Image
                src={
                  entry.type === "call"
                    ? callIcon
                    : entry.type === "text"
                      ? textIcon
                      : entry.type === "video"
                        ? videoIcon
                        : ""
                }
                alt={entry.type}
                width={60}
                height={60}
              />
              <div className="flex flex-col justify-around gap-4">
                <p className="text-ml text-primary font-semibold">
                  {entry.type === "call"
                    ? "Call"
                    : entry.type === "text"
                      ? "Text"
                      : entry.type === "video"
                        ? "Video"
                        : ""}{" "}
                  <span className="font-normal">with</span>{" "}
                  <span className="text-[#1F293785]">{entry.friendName}</span>
                </p>
                <p>
                  <small>
                    {new Date(entry.timestamp).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </small>
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;
