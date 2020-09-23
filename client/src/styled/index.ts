import styled, { css } from "styled-components";

export const inputCss = css`
  width: 100%;
  border: none;
  border-bottom: 1px solid #999;
  padding: 7px;
  outline: none;
  box-sizing: border-box;
`;

export const StyledInput = styled.input`
  ${inputCss}
`;

export const Button = styled.button`
  cursor: pointer;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px;

  :disabled {
    opacity: 0.5;
  }
`;
