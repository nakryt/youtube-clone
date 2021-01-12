import React from "react";
import "./App.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { StateProvider } from "./context/StateProvider";
import reducer, { initialState } from "./context/reducer";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";
import SearchPage from "./components/SearchPage/SearchPage";
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app__page">
          <Sidebar />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/trending" render={() => <h2>Trending videos</h2>} />
            <Route path="/search/:term" component={SearchPage} />
            <Route path="/" exact component={RecommendedVideos} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const AppContainer = () => (
  <StateProvider reducer={reducer} initialState={initialState}>
    <App />
  </StateProvider>
);

export default AppContainer;
