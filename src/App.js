import React, { useState } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

function App() {
  const [showComponent2, setShowComponent2] = useState(false);

  const handleButtonClick = () => {
    setShowComponent2(true);
  };

  return (
    <div className="App">
      <Component1 onButtonClick={handleButtonClick} />
      {showComponent2 && (
        <Component3>
          <Component2 />
        </Component3>
      )}
    </div>
  );
}

export default App;
