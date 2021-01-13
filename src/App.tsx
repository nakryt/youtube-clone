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
import WatchPage from "./components/WatchPage/WatchPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app__page">
          <Switch>
            <Route path="/watch" component={WatchPage} />

            <Route path="/search">
              <Sidebar />
              <SearchPage />
            </Route>

            <Route path="/">
              <Sidebar />
              <RecommendedVideos />
            </Route>

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
