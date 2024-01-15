/* eslint-disable camelcase */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "./pages/pageHome/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
