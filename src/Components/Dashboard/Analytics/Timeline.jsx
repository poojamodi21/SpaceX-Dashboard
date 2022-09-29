import React from "react";
import Node from "./Node";

const Timeline = ({ data }) => {
  return (
    <div className="max-h-full px-6 py-44 overflow-y-scroll scroller">
      {data.map((item) => (
        <Node item={item} />
      ))}
    </div>
  );
};

export default Timeline;
