import React, { useEffect } from "react";
import "./App.css";
import Header from "./pages/header/Header";
import Sidebar from "./pages/sidebar/Sidebar";
import Feed from "./pages/feed/Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./pages/login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./setup/firebase";
import Widgets from "./pages/widgets/Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // User is Logged In
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // User is Logged Out
        dispatch(logout());
      }
    });

    return () => {};
  }, []);

  return (
    <div className="flex flex-col bg-gray-100">
      {/* Header */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="flex mt-9 mx-5">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
