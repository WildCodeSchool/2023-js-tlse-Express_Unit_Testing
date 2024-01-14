/* eslint-disable camelcase */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "./pages/pageHome/Home";
import PageAppareil from "./pages/pageAppareils/PageAppareil";
import PageDispositifs from "./pages/pageDispositifs/PageDispositifs";
import PageUsers from "./pages/pageUsers/PageUsers";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <div className="App">
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/pageAppareil"
              element={<PageAppareil />}
            />
            <Route
              path="/pageDispositifs"
              element={<PageDispositifs />}
            />
            <Route
              path="/pageUsers"
              element={<PageUsers />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
