import './App.css';
import React, { useState, useEffect } from "react";
import DashboardUI from './common';
import history from './Utils/history';
import { Switch, Router } from "react-router-dom";
import AppRoute from "./routes/route";

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
      <Router history={history}>
        <DashboardUI cTime={cTime} />
      </Router>
    </div>
  );
}

export default App;
