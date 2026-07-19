"use client";
import { createContext, useEffect, useState } from "react";

export const TimelineActivityContext = createContext();

const TimelineActivityProvider = ({ children }) => {
  const [activity, setActivity] = useState([]);
  useEffect(() => {
    const stored = localStorage.getItem("activity");
    if (stored) {
      setActivity(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("activity", JSON.stringify(activity));
  }, [activity]);
  const data = { activity, setActivity };
  return (
    <TimelineActivityContext.Provider value={data}>
      {children}
    </TimelineActivityContext.Provider>
  );
};

export default TimelineActivityProvider;
