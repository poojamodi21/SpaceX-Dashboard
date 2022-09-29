import React from "react";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker

} from "react-simple-maps";
import MarkerNode from "./MarkerNode";



const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const markers = [
  {
    name: "Vandenberg Air Force Base",
    coordinates: [34.632, -120.610]
  },
  { name: "Omelek Island", coordinates: [9.047, 167.74] },
  { name: "Cape Canaveral", coordinates: [28.561, -80.577] },
  { name: "Boca Chica Village", coordinates: [25.997, -97.156] },
  { name: "Cape Canaveral", coordinates: [28.608, -80.603] },
  { name: "Vandenberg Air Force Base", coordinates: [34.644, -120.593] },
];

// const offsets = {
//   VT: [50, -8],
//   NH: [34, 2],
//   MA: [30, -1],
//   RI: [28, 2],
//   CT: [35, 10],
//   NJ: [34, 1],
//   DE: [33, 0],
//   MD: [47, 10],
//   DC: [49, 21]
// };

const MapChart = ({ mapdata }) => {
  return (
    <ComposableMap projection="geoAlbersUsa">
      {console.log(mapdata)}
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                stroke="#DE3163"
                geography={geo}
                fill="#000"
              />
            ))}
            {geographies.map(geo => {
              // const centroid = geoCentroid(geo);
              // const cur = allStates.find(s => s.val === geo.id);
              return (
                <g key={geo.rsmKey + "-name"}>

                </g>
              );
            })}
          </>
        )}
      </Geographies>
      {markers.map((item) => {

        return (
          <MarkerNode name={item.name}
            latitude={item.coordinates[0]}
            longitude={item.coordinates[1]} />
        )
      }


      )}


    </ComposableMap>
  );
};

export default MapChart;
