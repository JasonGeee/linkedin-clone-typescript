import React from "react";
import CreateIcon from "@mui/icons-material/Create";

function Feed() {
  return (
    <div className="flex-[0.6] my-0 mx-5">
      <div className="bg-white p-2.5 pb-5 rounded-xl mb-5">
        <div className="flex rounded-[30px] p-2.5 pl-4 text-gray-500 border border-solid border-gray-300">
          <CreateIcon />
          <form className="flex w-full" action="">
            <input
              className="border-none flex-[1] ml-2.5 outline-0 font-semibold"
              type="text"
            />
            <button className="hidden" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feed;
