import React from "react";
import Avatar from "@mui/material/Avatar";

interface Props {
  title: string;
  Icon?: any;
  avatar?: any;
}

function HeaderOption({ title, Icon, avatar }: Props) {
  return (
    <div className="flex flex-col items-center mr-6 text-gray-500 cursor-pointer hover:text-black">
      {/* Added !important for customizing Material UI */}
      {Icon && <Icon className="object-contain !h-6 !w-6" />}
      {avatar && <Avatar className="object-contain !h-6 !w-6" src={avatar} />}
      <h3 className="text-xs font-normal">{title}</h3>
    </div>
  );
}

export default HeaderOption;
