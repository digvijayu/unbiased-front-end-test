import React from "react";

import InputWrapper from "../InputWrapper";
import ErrorMessage from "../ErrorMessage";
import { StyledInput } from "../../styled";

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
      <StyledInput
        value={stateValue}
        onChange={handleOnTextChange}
        onFocus={() => {
          if (!isTouched) {
            setIsTouched(true);
          }
        }}
      />
      {!isValid && isTouched && (
        <ErrorMessage>{`${label} is invalid.`}</ErrorMessage>
      )}
    </InputWrapper>
  );
};

export default NameInput;

// const StyledInput = styled.input`
//   width: 100%;
//   border: none;
//   border-bottom: 1px solid #999;
//   padding: 7px;
//   outline: none;
//   box-sizing: border-box;
// `;
