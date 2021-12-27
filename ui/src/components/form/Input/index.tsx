import React, { FC, useEffect, useState } from "react";

import { UncontrolledInput, UncontrolledInputProps } from "./UncontrolledInput";

export type InputProps = Omit<UncontrolledInputProps, "error" | "onChange" | "onBlur"> & {
  id: string;
  register: (name: string, defaultValue: string | undefined) => void;
  unregister: (name: string) => void;
  setValue: (name: string, newValue: string) => void;
  validate?: (newValue: string | undefined) => boolean;
  errorMessage?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, newValueIsValid: boolean) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>, newValueIsValid: boolean) => void;
};

export const Input: FC<InputProps> = (props) => {
  const { id, label, register, unregister, setValue, required, validate, errorMessage, defaultValue, value, onBlur, onChange, ...remainingProps } = props;
  const [internalValue, setInternalValue] = useState(value || defaultValue);
  const [isValid, setIsValid] = useState(!required);
  const [isVisited, setIsVisited] = useState(false);
  const shouldShowError = !isValid && isVisited;

  useEffect(() => {
    register(id, value || internalValue);
    return () => unregister(id);
  }, [register, unregister, id, value, internalValue]);

  const validateFunction = validate || (required && Boolean);
  const privateOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInternalValue(newValue);
    setValue(id, newValue);

    const newValueIsValid = validateFunction ? validateFunction(newValue) : true;
    setIsValid(newValueIsValid);
    if (typeof onChange === "function") onChange(event, newValueIsValid);
  };

  return (
    <UncontrolledInput
      id={id}
      label={label}
      onChange={privateOnChange}
      onBlur={(e) => {
        setIsVisited(true);
        if (validateFunction) setIsValid(validateFunction(value ? value : internalValue));
        if (typeof onBlur === "function") onBlur(e, isValid);
      }}
      value={value ? value : internalValue}
      required={required}
      error={(shouldShowError && errorMessage) || undefined}
      {...remainingProps}
    ></UncontrolledInput>
  );
};
