import React from "react";

interface Props {
  title: string;
  Icon: any;
}

function HeaderOption({ title, Icon }: Props) {
  return (
    <div className="flex flex-col items-center mr-6 text-gray-500 cursor-pointer hover:text-black">
      {Icon && <Icon className="headerOptions_icon" />}
      <h3 className="text-xs font-normal">{title}</h3>
    </div>
  );
}

export default HeaderOption;
