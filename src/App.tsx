import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./Login";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="flex flex-col bg-gray-100">
      {/* Header */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="flex">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
