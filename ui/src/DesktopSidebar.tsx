import React, { FC } from "react";

import { layoutConfig } from "./components/layout/layoutConfig";
import { Navigation } from "./components/layout/Navigation";

export const DesktopSidebar: FC = () => {
  return (
    <div className="hidden bg-white md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto border-r border-gray-200">
          <div className="flex items-center flex-shrink-0 px-4">
            <img className="w-auto h-12" src={layoutConfig.brand.logo} alt={layoutConfig.brand.name} />
          </div>
          <div className="flex flex-col flex-grow mt-5">
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
};
