import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  return (
    <div className="flex flex-col bg-gray-100">
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <div className="flex">
        <Sidebar />
        <Feed />
      </div>
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
