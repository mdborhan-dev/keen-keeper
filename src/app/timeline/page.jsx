"use client";
import { TimelineActivityContext } from "@/context/TimelineActiviryContext";
import { useContext, useState } from "react";
import callIcon from "../../assets/call.png";
import textIcon from "../../assets/text.png";
import videoIcon from "../../assets/video.png";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";

const Timeline = () => {
  const { activity, setActivity } = useContext(TimelineActivityContext);
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchTerm, setSearchTerm] = useState("");
  const sortedActivity = [...activity].sort((a, b) =>
    sortOrder === "newest"
      ? new Date(b.timestamp) - new Date(a.timestamp)
      : new Date(a.timestamp) - new Date(b.timestamp),
  );
  const filteredActivity =
    filter === "all"
      ? sortedActivity
      : sortedActivity.filter((entry) => entry.type === filter);

  const searchActivity = filteredActivity.filter((entry) => {
    const term = searchTerm.toLowerCase();
    const formatDate = new Date(entry.timestamp).toLocaleDateString("en-Us", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).toLocaleLowerCase();
    return (
      entry.friendName.toLowerCase().includes(term) ||
      entry.type.toLowerCase().includes(term) ||
      formatDate.includes(term)
    );
  });
  return (
    <div className="min-h-[70vh] my-10 space-y-5 max-w-277.5 mx-auto max-sm:mx-4">
      <div className="space-y-3">
        <h2 className="text-5xl font-bold">Timeline</h2>
        <div className="flex justify-between items-center gap-2.5">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="select focus:border-none bg-transparent border-2"
          >
            <option disabled>Filter</option>
            <option value="call">Call only</option>
            <option value="text">Text only</option>
            <option value="video">Video only</option>
            <option value="all">No filter</option>
          </select>
          {/* for mobile */}
          <label className="input sm:hidden focus-within:border-none bg-transparent border-2">
            <IoIosSearch />
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
              placeholder="Search"
              className="sm:hidden outline-none"
            />
          </label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select sm:hidden focus:border-none bg-transparent border-2"
          >
            <option disabled>Sort By</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
          {/* for pc search and sort */}
          <div className="hidden sm:flex justify-center items-center gap-2.5">
            {/* search*/}
            <label className="input focus-within:border-none bg-transparent border-2">
              <IoIosSearch />
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                required
                placeholder="Search"
                className="outline-none"
              />
            </label>
            {/* Sort */}
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="select focus:border-none bg-transparent border-2"
            >
              <option disabled>Sort By</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center gap-4">
        {searchActivity.length === 0 ? (
          <div className="p-6 w-full flex justify-center items-center bg-white rounded-xl gap-3 text-center">
            <h2 className="text-center font-bold text-4xl">
              There's no data available to show
            </h2>
          </div>
        ) : (
          searchActivity.map((entry, ind) => (
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
