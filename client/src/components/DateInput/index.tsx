import React from "react";

import InputWrapper from "../InputWrapper";
import { StyledInput } from "../../styled";

type Props = {
  label: string;
  value?: Date;
  onChange: (newDate: Date) => void;
  validationFn: (dt: Date) => boolean;
};

const DateInput = ({ label, value, onChange, validationFn }: Props) => {
  const [stateDate, setStateDate] = React.useState<Date>(value || new Date());
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dt = new Date(e.target.value);
    setStateDate(dt);
    if (onChange) {
      onChange(dt);
    }
  };

  const dateToStr = (dt: Date) => {
    const day = ("0" + dt.getDate()).slice(-2);
    const month = ("0" + (dt.getMonth() + 1)).slice(-2);
    return `${dt.getFullYear()}-${month}-${day}`;
  };

  return (
    <InputWrapper label={label}>
      <StyledInput
        type="date"
        id="start"
        name="trip-start"
        value={dateToStr(stateDate)}
        min={dateToStr(new Date())}
        onChange={handleOnChange}
      />
    </InputWrapper>
  );
};

export default DateInput;
