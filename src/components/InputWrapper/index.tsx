import React from "react";
import styled from "styled-components";

type Props = {
  label: string;
  children: any;
};

const InputWrapper = ({ label, children }: Props) => {
  return (
    <Container>
      <Label>{label}</Label>
      <div>{children}</div>
    </Container>
  );
};

export default InputWrapper;

const Label = styled.label`
  font-size: 9px;
`;

const Container = styled.div`
  margin: 10px 0;
`;
