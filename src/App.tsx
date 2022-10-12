import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="flex flex-col items-center bg-gray-100">
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <div className="flex">
        <Sidebar />
      </div>
      {/* Feed */}
      {/* Widgets */}
    </div>
  );
}

export default App;
