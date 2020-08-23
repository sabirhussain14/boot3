import React, {useState} from 'react';
import './App.css';

function App() {
let [count, setCount]= useState(0)
let [isMorning, setMorning]= useState(true)
  return (
    <div className=  {isMorning ?'dayLight' : 'nightLight' } >

      
    
      <h1> Good  {isMorning ? 'Morning' : 'Night'}</h1>
      

      <h3>Value of Counter Variable is : {count} </h3>>
      <br />
      <button onClick={()=> setCount(count+1)}> 
      Update Counter 
     </button>
      <button onClick={()=> setMorning(!isMorning)}>Update Button</button>
    </div>
  );
}

export default App;
