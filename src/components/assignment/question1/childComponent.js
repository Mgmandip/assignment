import React, { useEffect } from 'react';

const ToggleChild = ({ isOn}) => {
  useEffect(() => {
    // This effect runs after every state update
    console.log(`Switch is ${isOn ? 'ON' : 'OFF'}`);
  }, [isOn]);

  return (
    <div>
      <p>The switch is {isOn ? 'ON' : 'OFF'}</p>
      <p>State updated!</p>
    </div>
  );
};

export default ToggleChild;
