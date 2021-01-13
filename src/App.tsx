import React from "react";
import "./App.scss";

import { Provider } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos";
import SearchPage from "./components/SearchPage/SearchPage";
import WatchPage from "./components/WatchPage/WatchPage";
import { store } from "./redux/store";

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
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppContainer;
