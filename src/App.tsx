import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__page">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
