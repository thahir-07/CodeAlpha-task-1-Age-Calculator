import { useState } from 'react';
import './App.css';

function App() {
  const [birthDate, setBirthDate]=useState("");
  const [years, setYears]=useState(null);

  function calculateDate(birthDate){
    const currentDate= new Date();
    const diffTime=currentDate-new Date(birthDate);
    const totalDays=Math.floor(diffTime/(1000*60*60*24));
    setYears(Math.floor(totalDays/365.25));
  }
  function update(){
    calculateDate(birthDate);
  }
  return (
    <div className="App">
        <h1>Age Calculator</h1>
        <p>Enter your date of birth</p>
        <input
        type='date' 
        value={birthDate}
        onChange={(e) =>{
          setBirthDate(e.target.value);
        }}/><br/>
        <button type='secondary' className='btn' onClick={update}>Calculate Age</button>
        {years!=null && years>=0?<h3>You are {years} years old</h3>:""}
    </div>
  );
}

export default App;
