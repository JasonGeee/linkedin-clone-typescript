import React from "react";
import Avatar from "@mui/material/Avatar";
// import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { useAppSelector } from "./app/hooks";

// interface User {
//   [key: string]: any;
//   user: any | null;
//   displayName?: any;
// }

function Sidebar() {
  const user = useAppSelector(selectUser);
  // const recentItem = ({ topic }: Props) => {
  //   <div className="sidebar_recentItem">
  //     <span className="sidebar_hash">#</span>
  //     <p>{topic}</p>
  //   </div>;
  // };

  return (
    <div className="top-20 sticky flex-[0.2] rounded-lg text-center h-fit">
      {/* sidebar top */}
      <div className="bg-white border-solid border-b-0 rounded-tl-lg rounded-tr-lg border-2 flex flex-col items-center pb-2">
        <img
          className="-mb-5 w-full h-16 rounded-tl-lg rounded-tr-lg object-cover"
          src="https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2029&q=80"
          alt=""
        />
        <Avatar className="mb-2.5" src={user.photoUrl} />
        <h2 className="text-lg">{user.displayName}</h2>
        <h4 className="text-gray-400 text-xs">{user.email}</h4>
      </div>

      {/* sidebar stats */}
      <div className="p-2.5 mb-2.5 bg-white rounded-bl-lg rounded-br-lg border-solid">
        <div className="mt-2.5 flex justify-between">
          <p className="text-gray-400 text-xs font-semibold ">Who viewed you</p>
          <p className="text-blue-500 text-xs font-semibold font-bold">1,527</p>
        </div>
        <div className="mt-2.5 flex justify-between">
          <p className="text-gray-400 text-xs font-semibold ">Connections</p>
          <p className="text-blue-500 text-xs font-semibold font-bold">2,184</p>
        </div>
      </div>

      {/* sidebar bottom */}
      <div className="text-left p-2.5 border border-solid rounded-xl mt-2.5 bg-white">
        <p className="text-sm pb-2.5">Recent</p>
        <div className="flex text-sm text-gray-400 font-semibold cursor-pointer mb-1 p-1 hover:text-black hover:cursor-pointer hover:rounded-xl hover:bg-slate-100">
          <span className="mr-2.5 ml-2.5">#</span>
          <p className="text-sm pb-2.5">reactjs</p>
        </div>
        <div className="flex text-sm text-gray-400 font-semibold cursor-pointer mb-1 p-1 hover:text-black hover:cursor-pointer hover:rounded-xl hover:bg-slate-100">
          <span className="mr-2.5 ml-2.5">#</span>
          <p className="text-sm pb-2.5">frontend-engineer</p>
        </div>
        <div className="flex text-sm text-gray-400 font-semibold cursor-pointer mb-1 p-1 hover:text-black hover:cursor-pointer hover:rounded-xl hover:bg-slate-100">
          <span className="mr-2.5 ml-2.5">#</span>
          <p className="text-sm pb-2.5">backend-engineer</p>
        </div>
        <div className="flex text-sm text-gray-400 font-semibold cursor-pointer mb-1 p-1 hover:text-black hover:cursor-pointer hover:rounded-xl hover:bg-slate-100">
          <span className="mr-2.5 ml-2.5">#</span>
          <p className="text-sm pb-2.5">fullstack-engineer</p>
        </div>
        <div className="flex text-sm text-gray-400 font-semibold cursor-pointer mb-1 p-1 hover:text-black hover:cursor-pointer hover:rounded-xl hover:bg-slate-100">
          <span className="mr-2.5 ml-2.5">#</span>
          <p className="text-sm pb-2.5">programming</p>
        </div>
        <div className="flex text-sm text-gray-400 font-semibold cursor-pointer mb-1 p-1 hover:text-black hover:cursor-pointer hover:rounded-xl hover:bg-slate-100">
          <span className="mr-2.5 ml-2.5">#</span>
          <p className="text-sm pb-2.5">software engineering</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
