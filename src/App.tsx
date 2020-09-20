import React from "react";
import styled from "styled-components";

import Form from "./Form";
import "./App.css";

function App() {
  return (
    <div>
      <FormContainer>
        <Form />
      </FormContainer>
    </div>
  );
}

export default App;

const FormContainer = styled.div`
  max-width: 500px;
  margin: auto;
`;
