import React, { useState } from 'react';
import planetsData from './data/planets.json';
import Slider from './components/Slider';
import PlanetTabs from './components/PlanetTabs';

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Sistema Solar</h1>
      <Slider planets={planetsData} onSelect={setSelectedPlanet} />
      {selectedPlanet && <PlanetTabs planet={selectedPlanet} />}
    </div>
  );
}

export default App;
