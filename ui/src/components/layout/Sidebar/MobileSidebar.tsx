import { Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import cn from "clsx";
import React, { FC, useState } from "react";

import { SidebarProps } from "@/ui";

import { layoutConfig } from "../layoutConfig";
import { Navigation } from "../Navigation";
import { SidebarFooter } from "./SidebarFooter";

export const MobileSidebar: FC<SidebarProps> = (props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={cn("md:hidden", { "pointer-events-none": !isSidebarOpen })}>
      <div className="fixed inset-0 z-40 flex">
        <Transition
          show={isSidebarOpen}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="fixed inset-0 bg-gray-600 bg-opacity-75"
        />

        <Transition
          className="relative flex flex-col flex-1 w-full max-w-xs bg-white"
          show={isSidebarOpen}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="absolute top-0 right-0 pt-2 -mr-12">
            <button
              className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <XIcon className="w-6 h-6 text-white" />
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img className="w-auto h-12" src={layoutConfig.brand.logo} alt={layoutConfig.brand.name} />
            </div>
            <div className="mt-5">
              <Navigation config={props.navigationConfig} />
            </div>
          </div>
          <SidebarFooter />
        </Transition>
        <div className="flex-shrink-0 w-14">{/* Dummy element to force sidebar to shrink to fit close icon */}</div>
      </div>
    </div>
  );
};
