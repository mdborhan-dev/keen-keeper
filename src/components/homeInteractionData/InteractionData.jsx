"use client"
import { TimelineActivityContext } from "@/context/TimelineActiviryContext";
import { useContext } from "react";

const InteractionData = () => {
    const { activity } = useContext(TimelineActivityContext)
    return (
        <div className="p-8 rounded-md bg-white flex flex-col gap-3 justify-between items-center text-center w-full">
            <h2 className="text-5xl font-medium">{activity.length}</h2>
            <p className="text-[#64748B]">Interaction This Month</p>
        </div>
    );
};

export default InteractionData;