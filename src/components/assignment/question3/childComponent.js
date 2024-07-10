import React, { useEffect } from 'react';

const MessageChild = ({ message,}) => {
  useEffect(() => {
    console.log('Message updated:', message);
  }, [message]);

  return (
    <div>
      <p>Current Message: Hello! {message}</p>
      <p>Message updated!</p>
    </div>
  );
};

export default MessageChild;
