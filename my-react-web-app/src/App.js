import React, { useState } from 'react';
import './App.css';

const service = [
  'Gardener', 'Flooring', 'Landscaper', 'Painter', 'Plastering', 'Pool',
  'Cleaner', 'Tree', 'Felling & Removal', 'Waterproofing', 'Roof',
  'Painter', 'Roof', 'Repairer', 'Floor', 'Tiler'
];

function Web() {
  const [selectedService, setSelectedService] = useState('');

  const handleServiceClick = (item) => {
    setSelectedService(item);
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1> Khiku Projects Pty Ltd </h1>
        <p>The company that provides good service to the customers.</p>
        <div>
          <h2>Services Offered:</h2>
          <ul>
            {service.map((item, index) => (
              <li key={index} onClick={() => handleServiceClick(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {selectedService && (
          <div>
            <h3>Selected Service: {selectedService}</h3>
            {/* Additional details or actions related to the selected service */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Web;

