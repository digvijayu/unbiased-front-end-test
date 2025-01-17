import React from "react";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";

import TextInput from "./components/TextInput";
import DateInput from "./components/DateInput";
import Selector from "./components/Selector";
import * as constants from "./constants";
import * as types from "./types";
import * as validations from "./utils/validations";
import { Button } from "./styled";
import useLocalStorageFormData from "./hooks/useLocalStorageFormData";

const ADD_TRIP = gql`
  mutation AddTrip($trip: InputTrip) {
    addTrip(trip: $trip) {
      name
      mobile
      dateOfArrival
      airportName
      terminalName
      flightNumber
    }
  }
`;

const initialData = {
  name: "",
  mobile: "",
  dateOfArrival: new Date(),
  airportName: undefined,
  terminalName: undefined,
  flightNumber: "",
};

function App() {
  const [lsFields, setLsFields] = useLocalStorageFormData(null);
  const [addTrip, { loading, error }] = useMutation(ADD_TRIP);

  const [state, setState] = React.useState<types.FormData>(initialData);

  const handleOnSubmit = () => {
    setLsFields(state);
    addTrip({ variables: { trip: lsFields } });
  };

  const loadFromLocalStorage = () => {
    console.log("lsFields", lsFields);
    if (lsFields) {
      setState(lsFields);
    }
  };

  console.log("state", state, state.name);

  const isFormValid =
    validations.name(state.name) &&
    validations.mobile(state.mobile) &&
    state.airportName !== undefined &&
    validations.dateOfArrival(state.dateOfArrival) &&
    validations.flightNumber(state.flightNumber);

  return (
    <div className="App">
      <TextInput
        label={"Name"}
        value={state.name}
        onChange={(name) => setState({ ...state, name })}
        validationFn={validations.name}
      />

      <TextInput
        label={"Mobile"}
        value={state.mobile}
        onChange={(mobile) => setState({ ...state, mobile })}
        validationFn={validations.mobile}
      />

      <DateInput
        label={"Date of Arrival"}
        value={state.dateOfArrival}
        onChange={(dateOfArrival) => setState({ ...state, dateOfArrival })}
        validationFn={validations.dateOfArrival}
      />

      <Selector
        label={"Airport"}
        placeholder={"Select airport"}
        items={constants.AIRPORTS.map((airport: types.Airport) => airport.name)}
        value={state.airportName}
        onChange={(airportName) =>
          setState({
            ...state,
            airportName: airportName ? airportName : undefined,
            terminalName: undefined,
          })
        }
      />

      {state.airportName && (
        <Selector
          label={"Terminal"}
          placeholder={"Select terminal"}
          items={
            constants.AIRPORTS.find(
              (airport: types.Airport) => airport.name === state.airportName
            )?.terminals || []
          }
          value={state.terminalName}
          onChange={(terminalName) => setState({ ...state, terminalName })}
        />
      )}

      <TextInput
        label={"Flight Number"}
        value={state.flightNumber}
        onChange={(flightNumber) => setState({ ...state, flightNumber })}
        validationFn={validations.flightNumber}
      />

      <ButtonContainer>
        <Button onClick={handleOnSubmit} disabled={!isFormValid}>
          Submit
        </Button>
        <Button onClick={loadFromLocalStorage} disabled={!lsFields}>
          Load from LocalStorage
        </Button>
      </ButtonContainer>
    </div>
  );
}

export default App;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;
