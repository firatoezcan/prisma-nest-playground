import clsx from "clsx";
import React, { FC } from "react";

const baseButtonClasses =
  "inline-flex items-center font-medium rounded-md border focus:outline-none focus:ring-2 focus:ring-offset-2";

const ButtonSchemeClasses = {
  primary: "border-transparent shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-700",
  secondary: "border-transparent text-indigo-900 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-700",
  white: "border-gray-300 shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-700",
} as const;

const ButtonSizes = {
  "1": "px-3 py-2 text-sm leading-4",
  "2": "px-4 py-2 text-sm",
  "3": "px-4 py-2 text-base",
  "4": "px-6 py-3 text-base",
} as const;

const LeadingIconSizes = {
  "1": "-ml-0.5 mr-2 h-4 w-4",
  "2": "-ml-1 mr-2 h-5 w-5",
  "3": "-ml-1 mr-3 h-5 w-5",
  "4": "-ml-1 mr-3 h-5 w-5",
} as const;

const TrailingIconSizes = {
  "1": "-mr-0.5 ml-2 h-4 w-4",
  "2": "-mr-1 ml-2 h-5 w-5",
  "3": "-mr-1 ml-3 h-5 w-5",
  "4": "-mr-1 ml-3 h-5 w-5",
} as const;

export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  size?: keyof typeof ButtonSizes;
  scheme?: keyof typeof ButtonSchemeClasses;
  leadingIcon?: React.ReactElement;
  trailingIcon?: React.ReactElement;
};

export const Button: FC<ButtonProps> = (props) => {
  const { size = "3", scheme = "primary", leadingIcon, trailingIcon, children, className, ...buttonProps } = props;

  return (
    <button
      type="button"
      className={clsx(baseButtonClasses, ButtonSizes[size], ButtonSchemeClasses[scheme], className)}
      {...buttonProps}
    >
      {leadingIcon && React.cloneElement(leadingIcon, { className: LeadingIconSizes[size] })}
      {children}
      {trailingIcon && React.cloneElement(trailingIcon, { className: TrailingIconSizes[size] })}
    </button>
  );
};
