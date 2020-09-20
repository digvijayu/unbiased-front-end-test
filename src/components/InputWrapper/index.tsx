import React from "react";

type Props = {
  label: string;
  children: any;
};

const InputWrapper = ({ label, children }: Props) => {
  return (
    <div>
      <div>{label}</div>
      <div>{children}</div>
    </div>
  );
};

export default InputWrapper;
