import React from "react";
import styled from "styled-components";

import Form from "./Form";
import "./App.css";

function App() {
  return (
    <AppScreen>
      <Header>Unbiased Technical Test Task</Header>
      <FormContainer>
        <Form />
      </FormContainer>
    </AppScreen>
  );
}

export default App;

const AppScreen = styled.div`
  margin-top: 80px;
`;

const FormContainer = styled.div`
  max-width: 500px;
  margin: auto;
`;

const Header = styled.nav`
  background-color: #343a40;
  color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 20px;
`;
