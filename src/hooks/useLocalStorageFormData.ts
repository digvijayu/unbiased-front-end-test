import { FormData } from "../types";

const LOCAL_STORAGE_FORM_KEY = "form-data";

const parseFormValues = (formValueStr: string | null): FormData | undefined => {
  let formValue;

  if (formValueStr) {
    formValue = JSON.parse(formValueStr);
    formValue.dateOfArrival = formValue.dateOfArrival
      ? new Date(formValue.dateOfArrival)
      : new Date();
    return formValue as FormData;
  } else {
    return undefined;
  }
};

export const useLocalStorageFormData = (
  initialValue: FormData
): [FormData | undefined, (setFormValue: FormData) => void] => {
  const formValue = parseFormValues(
    localStorage.getItem(LOCAL_STORAGE_FORM_KEY)
  );

  if (!formValue) {
    localStorage.setItem(LOCAL_STORAGE_FORM_KEY, JSON.stringify(initialValue));
  }

  const setFormValue = (setFormValue: FormData) => {
    localStorage.setItem(LOCAL_STORAGE_FORM_KEY, JSON.stringify(setFormValue));
  };

  return [formValue, setFormValue];
};

export default useLocalStorageFormData;
