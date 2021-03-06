import { ExclamationCircleIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import React, { FC } from "react";

export type UncontrolledInputProps = Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "value" | "defaultValue"> & {
  defaultValue?: string;
  value?: string;
  label: string;
  helpText?: string;
  error?: string;
  hint?: string;
  labelHidden?: boolean;
  leadingIcon?: React.ReactElement;
  trailingIcon?: React.ReactElement;
};

export const UncontrolledInput: FC<UncontrolledInputProps> = (props) => {
  const { label, helpText, error, hint, labelHidden, leadingIcon, trailingIcon, className, ...inputProps } = props;
  const { name, required } = inputProps;
  const inlineIconClasses = "absolute inset-y-0 flex items-center pointer-events-none";
  const withRequired = (string: string) => string + (required ? " *" : "");

  return (
    <div>
      <label htmlFor={name} className={clsx("block text-sm font-medium text-gray-700", { "sr-only": labelHidden })}>
        {withRequired(label)}
      </label>
      {hint && <span className="text-sm text-gray-500">{hint}</span>}
      <div className="relative mt-1">
        {leadingIcon && <div className={clsx(inlineIconClasses, "left-0 pl-3")}>{React.cloneElement(leadingIcon, { className: "h-5 w-5 text-gray-400" })}</div>}
        <input
          type="text"
          {...inputProps}
          className={clsx("block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm px-3 py-2", className, {
            "pl-10": leadingIcon,
            "pr-10": trailingIcon,
          })}
        />
        {trailingIcon && <div className={clsx(inlineIconClasses, "right-0 pr-3")}>{React.cloneElement(trailingIcon, { className: "h-5 w-5 text-gray-400" })}</div>}
        {error && (
          <div className={clsx(inlineIconClasses, "right-0 pr-3")}>
            <ExclamationCircleIcon className="w-5 h-5 text-red-500" />
          </div>
        )}
      </div>
      {helpText && <p className="mt-2 text-sm text-gray-500">{helpText}</p>}
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};
