/*
import './App.css'
import BarChart1 from './Pages/BarChart1'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <BarChart1></BarChart1>
    </>
  )
}

export default App*/

import React, { useState } from 'react';
import AudioToText from "./components/AudioToText";
import Container from "react-bootstrap/Container";
import Video from "./components/Video"
import Login from './components/Login.';
import Text from './components/Text';
import MainLayout from './components/MainLayout';
import Dashboard2 from './components/Dashboard2';
import BarChart1 from './Pages/BarChart1';
import Analytics from "./components/Analytics"
import DashboardAdmin from './components/DashboardAdmin';
import Tests1 from './components/Tests1';
import Tests2 from './components/Tests2';
import Learners1 from './components/Learners1';
import Learners2 from './components/Learners2';
import Reports from './components/Reports';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [showLogin, setShowLogin] = useState(true);
  const [currentComponent, setCurrentComponent] = useState(1);
  const [showAudioToText, setShowAudioToText] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);

  /*const nextPage = () => {
    setShowLogin(!showLogin);
    //setShowAudioToText(true);
    //setNextClicked(true);
  }

  const renderNextComponent = () => {
    setCurrentComponent(currentComponent + 1);
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case 1:
        return <Login />;
      case 2:
       return <Dashboard2/>;
      case 3:
        return <AudioToText onNext={renderNextComponent} />;
      case 4:
        return <Text onNext={renderNextComponent}/>;
      case 5:
        return <Dashboard  />;
      default:
        return null;
    }
  };
  */

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<MainLayout />}>
        <Route path="dashboard" element={<Dashboard2 />} />
        <Route path="tests1" element={<Tests1 />} />
        <Route path="tests2" element={<Tests2 />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;

