import { useCallback, useState } from "react";

export default function useFormHook(defaultValues = {}) {
  const [formValues, setFormValues] = useState(defaultValues as { [key: string]: string });
  const register = useCallback((name: string, defaultValue: string | undefined) => {
    if (!defaultValue) {
      setFormValues((prevState) => {
        const copy = JSON.parse(JSON.stringify(prevState));
        delete copy[name];
        return copy;
      });
      return;
    }
    setFormValues((prevState) => ({ ...prevState, [name]: defaultValue }));
  }, []);

  const unregister = useCallback((name: string) => {
    setFormValues((prevState) => {
      const copy = JSON.parse(JSON.stringify(prevState));
      delete copy[name];
      return copy;
    });
  }, []);

  const setValue = useCallback((name: string, newValue: string) => {
    setFormValues((prevState) => ({ ...prevState, [name]: newValue }));
  }, []);

  return { formValues, setFormValues, register, unregister, setValue };
}
