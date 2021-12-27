import React, { FC } from "react";

import { SidebarProps } from "@/ui";

import { layoutConfig } from "../layoutConfig";
import { Navigation } from "../Navigation";
import { SidebarFooter } from "./SidebarFooter";

export const DesktopSidebar: FC<SidebarProps> = (props) => {
  return (
    <div className="hidden bg-white md:flex md:flex-shrink-0">
      <div className="fixed inset-y-0 flex flex-col w-64">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto border-r border-gray-200">
          <div className="flex items-center flex-shrink-0 px-4">
            <img className="w-auto h-12" src={layoutConfig.brand.logo} alt={layoutConfig.brand.name} />
          </div>
          <div className="flex flex-col flex-grow mt-5">
            <Navigation config={props.navigationConfig} />
          </div>
          <SidebarFooter />
        </div>
      </div>
    </div>
  );
};
