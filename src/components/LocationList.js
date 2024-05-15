import React from "react";
import { useLocations } from "../context/LocationContext";
import LocationItem from "./LocationItem";

const LocationList = () => {
    
    const {locations} = useLocations();
    
    return (
        <div>
            {locations.map((loc, index) => (
                <LocationItem key={index} location={loc} />
            ))}
        </div>
    );
};

export default LocationList;