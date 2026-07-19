import { Legend, Pie, PieChart, Tooltip } from "recharts";

// #region Sample data


// #endregion
export default function Chart({ isAnimationActive = true, activity }) {
  const callData = activity.filter(entry => entry.type === "call")
  const textData = activity.filter(entry => entry.type === "text")
  const videoData = activity.filter(entry => entry.type === "video")
  const data = [
    { name: "Call", value: callData.length, fill: "#244d3f" },
    { name: "Text", value: textData.length, fill: "#7f37f5" },
    { name: "video", value: videoData.length, fill: "#37a163" },
  ];
  return (
    <PieChart
      style={{
        width: "100%",
        maxWidth: "300px",
        maxHeight: "80vh",
        aspectRatio: 1,
      }}
      className=""
      responsive
    >
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={isAnimationActive}
      />
      <Legend className="m-auto mt-4" />
      <Tooltip />
    </PieChart>
  );
}
