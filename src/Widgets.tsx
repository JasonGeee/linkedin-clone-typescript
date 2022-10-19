import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// import { newsInfo } from "./WidgetsNews";

const Widgets = () => {
  const newsArticle = (heading: string, subtitle: string) => (
    <div className="flex px-3 ml-2 mr-3 mb-3 cursor-pointer hover:rounded-xl hover:bg-slate-100">
      <div className="mr-1">
        <FiberManualRecordIcon sx={{ fontSize: 10 }} />
      </div>
      <div className="flex-[1]">
        <h4 className="text-sm mb-1">{heading}</h4>
        <p className="text-xs">{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="top-20 sticky flex-[0.2] rounded-lg h-fit bg-white border-solid border pb-2.5">
      <div className="flex items-center justify-between p-2.5">
        <h2 className="text-base font-normal mt-1">LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("ReactJS is blowing up!", "Top News - 31,553 readers")}
      {newsArticle(
        "Jason becomes a Fullstack Developer!",
        "Top News - 9,123 readers"
      )}
      {newsArticle(
        "Redux in ReactJS just gets better",
        "Top News - 186,092 readers"
      )}
      {newsArticle("WFH saves 60M commuting hours", "Top News - 9,284 readers")}
      {newsArticle("Will Crypto run it back?", "Crypto - 15,182 readers")}
    </div>
  );
};

export default Widgets;
