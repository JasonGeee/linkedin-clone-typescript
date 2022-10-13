import { Avatar } from "@mui/material";
import React from "react";
import InputOption from "./InputOption";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

interface Posts {
  name: string;
  description: string;
  message: string;
  photoUrl?: any;
}

function Post({ name, description, message }: Posts) {
  return (
    <div className="bg-white p-4 mb-2.5 rounded-xl">
      <div className="flex mb-2.5">
        <Avatar />
        <div className="ml-2.5">
          <h2>{name}</h2>
          <p className="text-xs text-gray-400">{description}</p>
        </div>
      </div>
      {/* Messages Here */}
      <div className="">
        <p>{message}</p>
      </div>
      {/* Post Buttons */}
      <div className="flex justify-evenly">
        <InputOption Icon={ThumbUpIcon} title="Like" color="text-blue-400" />
        <InputOption Icon={CommentIcon} title="Comment" color="text-blue-400" />
        <InputOption Icon={ShareIcon} title="Repost" color="text-blue-400" />
        <InputOption Icon={SendIcon} title="Send" color="text-blue-400" />
      </div>
    </div>
  );
}

export default Post;
