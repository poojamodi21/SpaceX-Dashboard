import React from "react";

const Node = ({ item }) => {
  return (
    <div
      className="flex 
        w-fit
        hover:w-full
        hover:flex-col
        justify-start 
        transition-[height]
        delay-150
        duration-150
        ease-in-out
        h-10
        hover:h-44
        hover:bg-slate-900 
        hover:bg-opacity-50 
        relative 
        hover:items-start 
        items-center 
        py-2 
        group"
    >
      <div className="h-56 border-r-2 border-white absolute left-1.5" />
      <div className="bg-red-400 z-50 h-4 w-4 rounded-full group-hover:animate-ping" />
      <p className="text-white pl-2 group-hover:pl-3 cursor-pointer">
        {item.missionName}
      </p>
      <p className="text-gray-200 text-sm bg-black hidden p-4 mx-2 overflow-auto group-hover:block scroller">
        {!item.details
          ? `No details for the mission ${item.missionName} as of yet`
          : item.details}
      </p>
      <p className="text-sm text-gray-400 p-2 hidden group-hover:block self-end">
        {item.date.toLocaleString("en-GB", { timeZone: "UTC" })}
      </p>
    </div>
  );
};

export default Node;
