import React from "react";
import Avatar from "@mui/material/Avatar";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../features/userSlice";

interface Props {
  title: string;
  Icon?: any;
  avatar?: boolean;
  onClick?: (params: any) => void;
}

function HeaderOption({ title, Icon, avatar, onClick }: Props) {
  const user = useAppSelector(selectUser);

  return (
    <div
      className="flex flex-col items-center mr-6 text-gray-500 cursor-pointer hover:text-black"
      onClick={onClick}
    >
      {/* Added !important for customizing Material UI */}
      {Icon && <Icon className="object-contain !h-6 !w-6" />}
      {avatar && (
        <Avatar className="object-contain !h-6 !w-6" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="text-xs font-normal">{title}</h3>
    </div>
  );
}

export default HeaderOption;
