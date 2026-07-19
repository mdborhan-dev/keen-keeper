"use client";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { useContext } from "react";
import { TimelineActivityContext } from "@/context/TimelineActiviryContext";
import { toast, Zoom } from "react-toastify";

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
  };
  return (
    <div className="grid grid-cols-3 gap-4 ">
      <button
        onClick={() => {
          logActivity("call");
          toast.success(`Successfully called ${friend.name}`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
          });
        }}
        className="btn w-full h-full rounded-2xl py-6 flex flex-col gap-2"
      >
        <BiPhoneCall className="text-4xl" />{" "}
        <span className="text-xl">Call</span>
      </button>
      <button
        onClick={() => {
          logActivity("text");
          toast.success(`Successfully texted ${friend.name}`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
          });
        }}

        className="btn w-full h-full rounded-2xl py-6 flex flex-col gap-2"
      >
        <MdOutlineMessage className="text-4xl" />{" "}
        <span className="text-xl">Text</span>
      </button>
      <button
        onClick={() => {
          logActivity("video");
          toast.success(`Successfully called ${friend.name}`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
          });
        }}
        className="btn w-full h-full rounded-2xl py-6 flex flex-col gap-2"
      >
        <IoVideocamOutline className="text-4xl" />{" "}
        <span className="text-xl">Video</span>
      </button>
    </div>
  );
};

export default QuickCheckIn;
