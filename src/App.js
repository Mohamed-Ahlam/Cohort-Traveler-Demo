
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LocationProvider } from './context/LocationContext';
import LocationForm from './components/LocationForm';
import LocationList from './components/LocationList'; 
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <LocationProvider>
        <div className='App'>
          <header className='App-header'>
            Cohort Travels Tracker
            <ThemeToggle/>
          </header>
          <main>
            <LocationForm/>
            <LocationList /> 
          </main>
        </div>
      </LocationProvider>
    </ThemeProvider>
  );
}

export default App;
