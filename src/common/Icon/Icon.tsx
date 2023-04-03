import React from "react";
import { ReactComponent as Search } from "../../assets/icons/Search.svg";
import { ReactComponent as Home } from "../../assets/icons/Home.svg";
import { ReactComponent as TVGuide } from "../../assets/icons/TV-Guide.svg";
import { ReactComponent as News } from "../../assets/icons/News.svg";
import { ReactComponent as Briefcase } from "../../assets/icons/briefcase.svg";
import { ReactComponent as Bold } from "../../assets/icons/Bold.svg";
import { ReactComponent as Health } from "../../assets/icons/Health.svg";
import { ReactComponent as LabBottle } from "../../assets/icons/lab-bottle-experiment.svg";
import { ReactComponent as LatestNews } from "../../assets/icons/Latest.svg";

type IconProps = {
  type: string;
};

const Icon = ({ type }: IconProps) => {
  const getIcon = () => {
    switch (type) {
      case "Search":
        return <Search />;
      case "Home":
        return <Home />;
      case "TVGuide":
        return <TVGuide />;
      case "News":
        return <News />;
      case "Briefcase":
        return <Briefcase />;
      case "Bold":
        return <Bold />;
      case "Health":
        return <Health />;
      case "LabBottle":
        return <LabBottle />;
      case "LatestNews":
        return <LatestNews />;
    }
  };

  return <div className="icon">{getIcon()}</div>;
};

export default Icon;
