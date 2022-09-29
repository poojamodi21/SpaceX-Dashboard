import React from "react";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const MapChart = ({ mapdata }) => {
  return (
    <ComposableMap projection="geoEqualEarth">
      {console.log(mapdata)}
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                stroke="#DE3163"
                geography={geo}
                fill="#000"
              />
            ))}
            {geographies.map((geo) => {
              return <g key={geo.rsmKey + "-name"}></g>;
            })}
          </>
        )}
      </Geographies>
      {mapdata.map(({ name, coordinates }) => (
        <Marker key={name} coordinates={[coordinates[1], coordinates[0]]}>
          <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}

    </ComposableMap>
  );
};

export default MapChart;
