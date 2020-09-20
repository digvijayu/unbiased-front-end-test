import React from "react";

import InputWrapper from "../InputWrapper";

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
      <select value={value} onChange={handleOnChange}>
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
      </select>
    </InputWrapper>
  );
};

export default Selector;
