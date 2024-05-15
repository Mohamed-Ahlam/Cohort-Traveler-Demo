import React, {createContext, useState, useContext} from 'react';

const LocationContext = createContext();

export const useLocations = () => useContext(LocationContext);

export const LocationProvider = ({children}) => {
    
    const [locations, setLocations] = useState([]);

    const addLocation = location => {
        setLocations(prev => [...prev, location]);
    }

    return(
        <LocationContext.Provider value={{locations, addLocation}}>
            {children}
        </LocationContext.Provider>
    )
};