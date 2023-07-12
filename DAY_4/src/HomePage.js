import React, { useState } from 'react';
import Navbar from './Navbar';
import './HomePage.css';

const HomePage = () => {
  const [model, setModel] = useState('');
  const [modelName, setModelName] = useState('');
  const [modelYear, setModelYear] = useState('');
  const [serviceType, setServiceType] = useState('');

  const handleModelChange = (event) => {
    const selectedModel = event.target.value;
    setModel(selectedModel);
    setModelName('');
  };

  const handleModelNameChange = (event) => {
    setModelName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic or data handling here

    // Validate model year
    const currentYear = new Date().getFullYear();
    const parsedModelYear = parseInt(modelYear);
    if (
      isNaN(parsedModelYear) ||
      parsedModelYear < 2000 ||
      parsedModelYear > currentYear
    ) {
      alert('Please enter a valid model year between 2000 and ' + currentYear);
      return;
    }

    console.log('Model:', model);
    console.log('Model Name:', modelName);
    console.log('Model Year:', modelYear);
    console.log('Service Type:', serviceType);
  };

  // Define the options for Model Name based on the selected Model
  const modelNameOptions = () => {
    switch (model) {
      case 'Air Conditioners':
        return (
          <>
            <option value="">Select Model Name</option>
            <option value="Inverter AC">Inverter AC</option>
            <option value="Non-Inverter AC">Non-Inverter AC</option>
          </>
        );
      case 'Refrigerators':
        return (
          <>
            <option value="">Select Model Name</option>
            <option value="Model 1">Side by Side Refrigerator</option>
            <option value="Model 2">Top Freezer Refrigerator</option>
            <option value="Model 3">French Door Refrigerator</option>
            <option value="Model 4">Bottom Freezer Refrigerator</option>
            <option value="Model 5">Counter Depth Refrigerator</option>
            <option value="Model 6">Smart refrigerator</option>
            <option value="Model 7">Mini Refrigerator</option>
            <option value="Model 8">Minibar</option>
          </>
        );
      case 'Washing Machines & Dryers':
        return (
          <>
            <option value="">Select Model Name</option>
            <option value="Model 1">Front-load washing machine</option>
            <option value="Model 2">Top-load washing machine</option>
            <option value="Model 4">Ventless dryers</option>
            <option value="Model 5">Condenser dryers</option>
            <option value="Model 6">Heat pump dryers</option>
            <option value="Model 7">Standard vented dryers</option>
          </>
        );
      case 'Dishwashers':
        return (
          <>
            <option value="">Select Model Name</option>
            <option value="Model 1">Front Control Dishwasher</option>
            <option value="Model 2">Top Control Dishwasher</option>
            <option value="Model 3">Portable Dishwasher</option>
            <option value="Model 4">Third Rack Dishwasher</option>
          </>
        );
      case 'Vacuum Cleaners':
        return (
          <>
            <option value="">Select Model Name</option>
            <option value="Model 1">Upright Vacuum</option>
            <option value="Model 2">Handheld Vacuum</option>
            <option value="Model 3">Cordless Vacuum</option>
            <option value="Model 4">Robotic vacuum</option>
            <option value="Model 5">Stick Vacuum</option>
            <option value="Model 6">Wet/Dry Vacuum</option>
            <option value="Model 7">Backpack Vacuum</option>
          </>
        );
      default:
        return <option value="">Select Model Name</option>;
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="model">Model:</label>
          <select id="model" value={model} onChange={handleModelChange}>
            <option value="">Select Model</option>
            <option value="Air Conditioners">Air Conditioners</option>
            <option value="Refrigerators">Refrigerators</option>
            <option value="Washing Machines & Dryers">
              Washing Machines & Dryers
            </option>
            <option value="Dishwashers">Dishwashers</option>
            <option value="Vacuum Cleaners">Vacuum Cleaners</option>
          </select>
        </div>
        <div>
          <label htmlFor="modelName">Model Name:</label>
          <select
            id="modelName"
            value={modelName}
            onChange={handleModelNameChange}
          >
            {modelNameOptions()}
          </select>
        </div>
        <div>
          <label htmlFor="modelYear">Model Year:</label>
          <input
            type="number"
            id="modelYear"
            value={modelYear}
            onChange={(event) => setModelYear(event.target.value)}
            min="2000"
            max={new Date().getFullYear().toString()}
          />
        </div>
        <div>
          <label htmlFor="serviceType">Service Type:</label>
          <select
            id="serviceType"
            value={serviceType}
            onChange={(event) => setServiceType(event.target.value)}
          >
            <option value="">Select Service Type</option>
            <option value="Installation">Installation</option>
            <option value="Repair">Repair</option>
          </select>
        </div>
        <button type="submit">Request</button>
      </form>
    </div>
  );
};

export default HomePage;
