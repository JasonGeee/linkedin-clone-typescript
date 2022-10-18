import React from "react";

function Login() {
  const register = () => {};
  const loginToApp = () => {};

  return (
    <div className="grid place-items-center ml-auto mr-auto pt-24 pb-24">
      <img
        className="object-contain h-16 mt-5 mb-5"
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
        alt="linkedin"
      />
      <form className="flex flex-col ">
        <input
          className="w-80 h-12 text-xl pl-2.5 mb-2.5 rounded"
          type="text"
          placeholder="Full Name (required if registering)"
        />
        <input
          className="w-80 h-12 text-xl pl-2.5 mb-2.5 rounded"
          type="text"
          placeholder="Profile Pic URL (optional)"
        />
        <input
          className="w-80 h-12 text-xl pl-2.5 mb-2.5 rounded"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-80 h-12 text-xl pl-2.5 mb-2.5 rounded"
          type="password"
          placeholder="Password"
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
