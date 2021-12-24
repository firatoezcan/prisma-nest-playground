import React, { FC } from "react";

import { NavItem } from "../Navigation/types";
import { DesktopSidebar } from "./DesktopSidebar";
import { MobileSidebar } from "./MobileSidebar";

export type SidebarProps = {
  navigationConfig: Array<NavItem>;
};

export const Sidebar: FC<SidebarProps> = (props) => {
  return (
    <>
      <MobileSidebar {...props} />
      <DesktopSidebar {...props} />
    </>
  );
};
