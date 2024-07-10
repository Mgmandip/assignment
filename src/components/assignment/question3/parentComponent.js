import React, { useState } from 'react';
import MessageChild from './childComponent';

const MessageParent = () => {
  const [message, setMessage] = useState('');

  const updateMessage = () => {
    setMessage('New message updated!');
  };

  const styles={
    counter:{
      backgroundColor: 'lightgreen',
      border: "green",
      padding: "20px",
      margin: "20px",
      borderRadius: "10px",
      boxShadow: "2px 2px 2px 2px #ccc",
    },
    count:{
      fontSize: "20px",
      fontWeight: "bold",
      color: "red",
    },
  };

  return (
    <div id="counter" style={styles.counter}>
      <h2>Message Display Component</h2>
      <MessageChild message={message} updateMessage={updateMessage} />
      <button onClick={updateMessage}>Update Message</button>
    </div>
  );
};

export default MessageParent;
