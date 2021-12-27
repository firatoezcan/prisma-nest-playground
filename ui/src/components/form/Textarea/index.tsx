import React, { FC, useEffect, useState } from "react";

import { UncontrolledTextarea, UncontrolledTextareaProps } from "./UncontrolledTextarea";

export type TextareaProps = Omit<UncontrolledTextareaProps, "error" | "onChange" | "onBlur"> & {
  id: string;
  register: (name: string, defaultValue: string | undefined) => void;
  unregister: (name: string) => void;
  setValue: (name: string, newValue: string) => void;
  validate?: (newValue: string | undefined) => boolean;
  errorMessage?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>, newValueIsValid: boolean) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>, newValueIsValid: boolean) => void;
};

export const Textarea: FC<TextareaProps> = (props) => {
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
  const privateOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setInternalValue(newValue);
    setValue(id, newValue);

    const newValueIsValid = validateFunction ? validateFunction(newValue) : true;
    setIsValid(newValueIsValid);
    if (typeof onChange === "function") onChange(event, newValueIsValid);
  };

  return (
    <UncontrolledTextarea
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
    ></UncontrolledTextarea>
  );
};
