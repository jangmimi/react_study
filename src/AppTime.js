// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function AppTime() {

  const [time,setTime] = useState(0);

  const updateTime = () => {
    setTime(time + 1);
    console.log(time);
  }
  
  return (
    <div className="App">
      <h2> 시간 조절 : <br/>{time} 시</h2>
      <button onClick={updateTime}> 시간올리기 </button>
    </div>
  );
}

export default AppTime;
