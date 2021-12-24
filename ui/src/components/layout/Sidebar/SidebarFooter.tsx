import React from "react";

export const SidebarFooter = () => {
  return (
    <div className="flex flex-shrink-0 p-4 border-t border-gray-200">
      <a href="/" className="flex-shrink-0 block group">
        <div className="flex items-center">
          <div>
            <img className="inline-block w-10 h-10 rounded-full" src="https://firatoezcan.com/_next/static/images/Firat-2-320-1d4a7719f0f09abdbdb3b173ba00dc81.jpg" alt="" />
          </div>
          <div className="ml-3">
            <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">Firat Özcan</p>
            <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">View profile</p>
          </div>
        </div>
      </a>
    </div>
  );
};
