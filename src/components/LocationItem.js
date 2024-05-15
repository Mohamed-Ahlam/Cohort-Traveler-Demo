import React from 'react';
import { useTheme } from '../context/ThemeContext';

const LocationItem = ({ location }) => {
  const {theme} = useTheme();
  const themeClass = theme === 'original' ? 'original-item' : 'accessible-item'; 

  return (
    <div className={themeClass}>
      <p>{location.city}, {location.country}, {location.continent}</p>
    </div>
  );
};

export default LocationItem;
