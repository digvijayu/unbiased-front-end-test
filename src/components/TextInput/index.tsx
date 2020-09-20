import React from "react";

import InputWrapper from "../InputWrapper";

type Props = {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  validationFn?: (value: string) => boolean;
};

const NameInput = ({ label, onChange, validationFn, value }: Props) => {
  const [stateValue, setStateValue] = React.useState<string>(value);
  const [isValid, setValid] = React.useState<boolean>(
    validationFn ? validationFn(value) : true
  );
  const [isTouched, setIsTouched] = React.useState<boolean>(false);

  const handleOnTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setStateValue(newValue);
    validationFn && setValid(validationFn(newValue));
    if (onChange) {
      onChange(newValue);
    }
  };
  React.useEffect(() => {}, [value]);

  return (
    <InputWrapper label={label}>
      <input
        value={stateValue}
        onChange={handleOnTextChange}
        onFocus={() => {
          if (!isTouched) {
            setIsTouched(true);
          }
        }}
      />
      {!isValid && isTouched && <div>{`${label} is invalid.`}</div>}
    </InputWrapper>
  );
};

export default NameInput;
