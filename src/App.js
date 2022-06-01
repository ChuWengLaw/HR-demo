import './App.css';
import React, { useState, useEffect } from "react";
import DashboardUI from './common'

function App() {
  let time = new Date().toLocaleString();
  const [cTime, setTime] = useState(time);
  useEffect(() => {
    setInterval(() => {
      setTime(time);
    }, 1000);
  });
  return (
    <div className="App">
      <DashboardUI cTime={cTime}/>
    </div>
  );
}

export default App;
