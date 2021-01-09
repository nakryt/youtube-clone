import React from "react";
import "./App.scss";

import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app__page">
          <Sidebar />
          <RecommendedVideos />
        </div>
      </div>
    </Router>
  );
}

export default App;
