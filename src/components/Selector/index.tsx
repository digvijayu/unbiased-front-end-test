import React from "react";
import styled from "styled-components";

import InputWrapper from "../InputWrapper";
import { inputCss } from "../../styled";

type Props = {
  label: string;
  placeholder?: string;
  items: string[];
  value?: string;
  onChange?: (value: string) => void;
};

const Selector = ({ items, value, onChange, label, placeholder }: Props) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    onChange && onChange(e.target.value);

  return (
    <InputWrapper label={label}>
      <StyledSelect value={value} onChange={handleOnChange}>
        {placeholder && (
          <option key={""} value={""}>
            {placeholder}
          </option>
        )}
        {items.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </StyledSelect>
    </InputWrapper>
  );
};

export default Selector;

const StyledSelect = styled.select`
  ${inputCss}
`;
