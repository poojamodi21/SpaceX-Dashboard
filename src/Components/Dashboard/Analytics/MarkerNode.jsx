import React from 'react'
import {Marker} from "react-simple-maps";

const MarkerNode = ({name,latitude,longitude}) => {
    return (
        <Marker coordinates={[-101, 53]}>
            <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
            <text
                textAnchor="middle"
                style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
            >
                {name}
            </text>
        </Marker>
    )
}

export default MarkerNode