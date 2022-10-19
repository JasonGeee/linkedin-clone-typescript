import React, { useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAppDispatch } from "./app/hooks";
import { login } from "./features/userSlice";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useAppDispatch();

  const register = () => {
    if (!name) {
      return alert("Please Enter a Full Name");
    }
    // Creates User and updates profile
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: name,
          photoURL: profilePic,
        }).then(() => {
          //Dispatch from Redux
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: profilePic,
            })
          );
        });
      })
      .catch((error) => alert(error));
  };

  const loginToApp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="grid place-items-center ml-auto mr-auto pt-24 pb-24">
      <img
        className="object-contain h-16 mt-5 mb-5"
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt="linkedin"
      />
      <form className="flex flex-col ">
        {/* Name */}
        <input
          className="w-80 h-12 text-xl pl-2.5 mb-2.5 rounded"
          type="text"
          placeholder="Full Name (required if registering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* Profile Pic */}
        <input
          className="w-80 h-12 text-xl pl-2.5 mb-2.5 rounded"
          type="text"
          placeholder="Profile Pic URL (optional)"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        {/* Email */}
        <input
          className="w-80 h-12 text-xl pl-2.5 mb-2.5 rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Password */}
        <input
          className="w-80 h-12 text-xl pl-2.5 mb-2.5 rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-80 h-12 text-xl text-white bg-blue-500 rounded"
          type="submit"
          onClick={loginToApp}
        >
          Sign In
        </button>
      </form>

      <p className="mt-5">
        Not a member?{" "}
        <span className="text-blue-400 cursor-pointer" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
