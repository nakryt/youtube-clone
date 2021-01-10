import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <div className="app__page">
            <Sidebar />
            <Route path="/search/:term" component={SearchPage} />
            <Route path="/" exact component={RecommendedVideos} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
