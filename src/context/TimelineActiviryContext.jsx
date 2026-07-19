"use client";
import { createContext, useState } from "react";

export const TimelineActivityContext = createContext();

const TimelineActivityProvider = ({ children }) => {
  const [activity, setActivity] = useState([]);
  const data = { activity, setActivity };
  return (
    <TimelineActivityContext.Provider value={data}>
      {children}
    </TimelineActivityContext.Provider>
  );
};

export default TimelineActivityProvider;
