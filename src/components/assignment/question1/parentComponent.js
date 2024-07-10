import React, { useState } from 'react';
import ToggleChild from './childComponent';

const ToggleParent = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prevState => !prevState);
  };
  
  const styles={
    div:{
        backgroundColor: 'lightgreen',
        border: "green",
        padding: "20px",
        margin: "20px",
        borderRadius: "10px",
        boxShadow: "2px 2px 2px 2px #ccc",
    }
}

  return (
    <div style={styles.div}>
      <h2>Toggle Component Example</h2>
      <ToggleChild isOn={isOn} />
      <button onClick={toggleSwitch}>
        {isOn ? 'Turn OFF' : 'Turn ON'}
      </button>
    </div>
  );
};

export default ToggleParent;
