import React from "react";

import NameInput from "./components/NameInput";
import DateInput from "./components/DateInput";
import "./App.css";

type State = {
  name: string;
  mobile: string;
  dateOfArrival: Date;
  airportName: string | null;
  terminalName: string | null;
};

function App() {
  const handleOnSubmit = () => {};
  const [state, setState] = React.useState<State>({
    name: "",
    mobile: "",
    dateOfArrival: new Date(),
    airportName: null,
    terminalName: null,
  });
  return (
    <div className="App">
      <NameInput
        label={"Name"}
        value={state.name}
        onChange={(name) => setState({ ...state, name })}
      />

      <NameInput
        label={"Mobile"}
        value={state.mobile}
        onChange={(mobile) => setState({ ...state, mobile })}
      />

      <DateInput
      // label={"Mobile"}
      // value={state.mobile}
      // onChange={(mobile) => setState({ ...state, mobile })}
      />

      <button onClick={handleOnSubmit}>Submit</button>
    </div>
  );
}

export default App;
