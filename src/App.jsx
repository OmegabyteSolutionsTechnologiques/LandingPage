import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from './Home/HomePage';
import ContactPage from './Contact/ContactPage';
import LickPage from "./Demo/Lick/Home/LickHomePage";

import './App.scss'


function App() {

  //Display
  const IsDesktop = useMediaQuery({
    query: `(min-width: 700px)`
  });

  return (
    <Router>
      <Routes>
        <Route exact path={`/`} element={<HomePage IsDesktop={IsDesktop} />} />
        <Route exact path={`/contact`} element={<ContactPage IsDesktop={IsDesktop} />} />
        <Route exact path={`/demo/lick/home`} element={<LickPage IsDesktop={IsDesktop} />} />


      </Routes>
      
    </Router>
  )
}

export default App
