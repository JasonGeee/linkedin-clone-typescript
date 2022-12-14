import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { logout, selectUser } from "../../features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../setup/firebase";
import { useAppDispatch } from "../../app/hooks";

function Header() {
  const dispatch = useAppDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    signOut(auth);
  };

  return (
    <div className="sticky top-0 flex bg-white justify-evenly border-b border-slate-300 pt-3 pb-3 w-full z-50">
      {/* Header Left */}
      <div className="flex">
        <img
          className="mr-2.5"
          src="https://img.icons8.com/color/48/000000/linkedin.png"
          alt="linkedin"
        />

        {/* Header Search */}
        <div className="flex p-2 items-center rounded bg-slate-100">
          <SearchIcon className="text-gray-400" />
          <input
            className="outline-none bg-slate-100 border-none"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Header Right */}
      <div className="flex">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={WorkIcon} title="Jobs" />
        <HeaderOption Icon={MessageIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={true} title="Me" onClick={logoutOfApp} />
        {/* <HeaderOption Icon={HomeIcon} title="Work" />
        <HeaderOption Icon={HomeIcon} title="Learning" /> */}
      </div>
    </div>
  );
}

export default Header;
