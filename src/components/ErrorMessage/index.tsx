import React from "react";
import styled from "styled-components";

type Props = {
  children: string | React.ReactElement;
};

const ErrorMessage = ({ children }: Props) => (
  <ErrorContainer>{children}</ErrorContainer>
);

export default ErrorMessage;

const ErrorContainer = styled.div`
  margin-top: 10px;
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  padding: 7px 10px;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 9px;
`;
