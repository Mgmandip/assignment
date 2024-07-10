import React, { useState } from 'react'

const CounterFunction = () => {

const [count,setCount] = useState((0));
// State variable for count
const Increment= () =>{
    setCount(count+1);
}

const Decrement= () =>{
    setCount(count-1);
}

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
    <h1>Counter Function</h1>
    <h2>Count: {count}</h2>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default CounterFunction
