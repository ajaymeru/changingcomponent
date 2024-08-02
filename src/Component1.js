import React from 'react';

function Component1({ onButtonClick }) {
  return (
    <div>
      <button onClick={onButtonClick}>Show Component 2</button>
    </div>
  );
}

export default Component1;
