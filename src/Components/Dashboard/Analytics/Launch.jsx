import axios from "axios";
import React, { useEffect, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Timeline from "./Timeline";
import MapChart from "./MapChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Launch = () => {

  const [history, setHistory] = useState([]);
  const [upcomimg, setUpcoming] = useState([]);
  const [isFetchingData, setIsFetchingData] = useState(true);
  const [barData, setBarData] = useState({});
  const [timelineData, setTimelineData] = useState([]);
  const [maplocations, setMaplocations] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const analysisForBarGraph = (allLaunchesData) => {
    const years = allLaunchesData.map((item) => item.launch_year); //getting the list of years
    const unique = years.filter(
      (
        value,
        index,
        a //filtering out unique years
      ) => a.indexOf(value) === index
    );

    //getting number of flights in a single year
    const number = unique.map(
      (item, index) =>
        allLaunchesData.filter((x) => x.launch_year === item).length
    );

    //data to pass in barChart
    const data = {
      labels: unique,
      datasets: [
        {
          label: "Launches per year",
          data: number,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    };

    return data;
  };

  const analysisForTimeLine = (allLaunchesData) => {
    const dateAndDetails = allLaunchesData.map((item) => ({
      date: new Date(item.launch_date_utc),
      missionName: item.mission_name,
      details: item.details,
    }));
    const sorted = dateAndDetails.sort((a, b) => b.date - a.date);
    return sorted;
  };

  const analysisForMap = (launchPadLocations) => {
    const dataToPass = launchPadLocations.map((item) => (
      {
        name: item.location.name,
        coordinates: [
          item.location.latitude.toFixed(3),
          item.location.longitude.toFixed(3)
        ],
      }
    ));
    return dataToPass;
  };


  const getData = async () => {
    // getting previous data
    const pastFlights = await (
      await axios.get("https://api.spacexdata.com/v3/launches/past")
    ).data;
    setHistory(pastFlights);

    // getting upcoming data
    const upcomingFlights = await (
      await axios.get("https://api.spacexdata.com/v3/launches/upcoming")
    ).data;
    setUpcoming(upcomingFlights);

    // getting all flights
    const allLaunchesData = await (
      await axios.get("https://api.spacexdata.com/v3/launches")
    ).data;

    const launchPadLocations = await (
      await axios.get("https://api.spacexdata.com/v3/launchpads")
    ).data;

    const dataForBar = analysisForBarGraph(allLaunchesData); //function returns data to be passed in the barChart
    const dataForTimeline = analysisForTimeLine(allLaunchesData); //funtion returns data to be passed in the timeline
    const dataForMaps = analysisForMap(launchPadLocations);
    setMaplocations(dataForMaps);
    setTimelineData(dataForTimeline);
    setBarData(dataForBar);
    setIsFetchingData(false);

  };


  //options to pass in barChart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },

      title: {
        display: true,
        text: "Launches per year",
      },
    },
  };

  return (
    <div>
      <div className="border rounded-md shadow-lg bg-black mx-4 px-4 pb-2">
        <h2 className="text-lg text-white">Launch Dashboard</h2>
        <div className="grid grid-cols-12 md:gap-4">
          <div className="col-span-12 bg-black md:col-span-4 border rounded-t-md md:rounded-md border-white shadow-2xl text-white">
            <div className="text-center">
              <p
                className={
                  isFetchingData
                    ? "animate-pulse bg-gray-800 text-white text-xl p-2"
                    : "text-xl p-2 text-red-400"
                }
              >
                {isFetchingData ? (
                  "Loading..."
                ) : (
                  <>
                    Upcoming flights&nbsp;
                    <span className="font-bold text-white">
                      {upcomimg.length}
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
          <div className="bg-black col-span-12 md:col-span-4 border border-white rounded-none md:rounded-md shadow-2xl text-white">
            <div className="text-center">
              <p
                className={
                  isFetchingData
                    ? "animate-pulse bg-gray-800 text-white text-xl p-2"
                    : "text-xl p-2 text-red-400"
                }
              >
                {isFetchingData ? (
                  "Loading..."
                ) : (
                  <>
                    Previous flights&nbsp;
                    <span className="font-bold text-white">
                      {history.length}
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
          <div className="bg-black col-span-12 md:col-span-4 border rounded-b-md md:rounded-md border-white shadow-2xl text-white">
            <div className="text-center">
              <p
                className={
                  isFetchingData
                    ? "animate-pulse bg-gray-800 text-white text-xl p-2"
                    : "text-xl p-2 text-red-400"
                }
              >
                {isFetchingData ? (
                  "Loading..."
                ) : (
                  <>
                    Total flights&nbsp;
                    <span className="font-bold text-white">
                      {upcomimg.length + history.length}
                    </span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* bottom grid */}

      <div className="grid grid-cols-12 gap-3 mx-4 my-8">
        <div className="h-96 bg-black  col-span-12 md:col-span-4 border rounded-md">
          {isFetchingData ? (
            <div className="bg-transparent animate-pulse w-full h-full text-white text-lg flex items-center justify-center">
              Loading...
              <div className="h-4 w-4 border-x-white border-y-0 rounded-full border border-x-2 animate-spin" />
            </div>
          ) : (
            <MapChart mapdata={maplocations} />
          )}
        </div>
        <div className=" bg-black col-span-12 md:col-span-4 border rounded-md">
          {isFetchingData ? (
            <div className="bg-transparent animate-pulse w-full h-full text-white text-lg flex items-center justify-center">
              Loading...
              <div className="h-4 w-4 border-x-white border-y-0 rounded-full border border-x-2 animate-spin" />
            </div>
          ) : (
            <Bar options={options} data={barData} />
          )}
        </div>
        <div className="h-96 bg-black col-span-12 md:col-span-4 border rounded-md">
          {isFetchingData ? (
            <div className="bg-transparent animate-pulse w-full h-full text-white text-lg flex items-center justify-center">
              Loading...
              <div className="h-4 w-4 border-x-white border-y-0 rounded-full border border-x-2 animate-spin" />
            </div>
          ) : (
            <Timeline data={timelineData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Launch;
