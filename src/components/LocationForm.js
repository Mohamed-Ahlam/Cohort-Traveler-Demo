import React, { useState } from 'react'; 
import { useLocations } from '../context/LocationContext'; 

const LocationForm = () => {
  const [location, setLocation] = useState({ city: '', country: '', continent: '' }); 
  const { addLocation } = useLocations(); 

  const handleSubmit = (e) => { 
    e.preventDefault();
    addLocation(location); 
    setLocation({ city: '', country: '', continent: '' }); 
  };

  const handleChange = (e) => { 
    const { name, value } = e.target;
    setLocation(prev => ({ ...prev, [name]: value })); 
  };

  return (
    <form onSubmit={handleSubmit}> 
      <label for="city">City</label>
      <input type="text" name="city" value={location.city} onChange={handleChange}/> 
      <label for="country">Country</label>
      <input type="text" name="country" value={location.country} onChange={handleChange} placeholder="Country" /> 
      <label for="continent">Continent</label>
      <input type="text" name="continent" value={location.continent} onChange={handleChange} placeholder="Continent" /> 
      <button type="submit">Add Location</button> 
    </form>
  );
};

export default LocationForm; 
