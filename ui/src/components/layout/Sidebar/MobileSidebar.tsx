import { Transition } from "@headlessui/react";
import { MenuAlt2Icon, XIcon } from "@heroicons/react/solid";
import cn from "clsx";
import React, { FC, useState } from "react";

import { SidebarProps } from "@/ui";

import { layoutConfig } from "../layoutConfig";
import { Navigation } from "../Navigation";
import { SidebarFooter } from "./SidebarFooter";

export const MobileSidebar: FC<SidebarProps> = (props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div className={cn("fixed inset-0 z-40 flex", { "pointer-events-none": !isSidebarOpen })}>
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
      <div className="flex flex-col flex-1 w-0">
        <div className="pt-1 pl-1 md:hidden sm:pl-3 sm:pt-3">
          <button
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt2Icon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
