import React from "react";

interface Inputs {
  title: string;
  Icon: any;
  color: string;
}

function InputOption({ title, Icon, color }: Inputs) {
  return (
    <div className="flex items-center mt-4 text-gray-600 p-2.5 cursor-pointer hover:bg-slate-200 rounded-xl">
      <Icon className={color} />
      <h4 className="ml-1">{title}</h4>
    </div>
  );
}

export default InputOption;
