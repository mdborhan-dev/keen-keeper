"use client";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { useContext } from "react";
import { TimelineActivityContext } from "@/context/TimelineActiviryContext";

const QuickCheckIn = ({ friend }) => {
  const { activity, setActivity } = useContext(TimelineActivityContext);

  const logActivity = (type) => {
    const newEntry = {
      id: Date.now(),
      friendId: friend.id,
      friendName: friend.name,
      type,
      timestamp: new Date().toISOString(),
    };

    setActivity([...activity, newEntry]);
    console.log(newEntry);
    console.log("activity", activity);
  };
  return (
    <div className="grid grid-cols-3 gap-4 ">
      <button
        onClick={() => logActivity("call")}
        className="btn w-full h-full rounded-2xl py-6 flex flex-col gap-2"
      >
        <BiPhoneCall className="text-5xl" />{" "}
        <span className="text-2xl">Call</span>
      </button>
      <button
        onClick={() => logActivity("text")}

        className="btn w-full h-full rounded-2xl py-6 flex flex-col gap-2"
      >
        <MdOutlineMessage className="text-5xl" />{" "}
        <span className="text-2xl">Text</span>
      </button>
      <button
        onClick={() => logActivity("video")}

        className="btn w-full h-full rounded-2xl py-6 flex flex-col gap-2"
      >
        <IoVideocamOutline className="text-5xl" />{" "}
        <span className="text-2xl">Video</span>
      </button>
    </div>
  );
};

export default QuickCheckIn;
