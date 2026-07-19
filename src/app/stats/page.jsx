"use client";
import Chart from "@/components/StatsChart/Chart";
import { TimelineActivityContext } from "@/context/TimelineActiviryContext";
import { useContext } from "react";

const StatsPage = () => {
  const { activity } = useContext(TimelineActivityContext);
  return (
    <div className="min-h-[70vh] max-w-277.5 mx-auto my-10 space-y-5 max-sm:mx-4">
      <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl">Friendship Analytics</h2>
      <div className="p-6 bg-white rounded-3xl shadow-sm flex flex-col justify-center items-center gap-4">
        <h3 className="text-xl text-left">By Interaction Type</h3>
        <Chart activity={activity} />
      </div>
    </div>
  );
};

export default StatsPage;
