import { useState } from "react";

import InputComponent from "./components/InputComponent";
import Results from "./components/Results";

function App() {
  const [inputComponent, setInputComponent] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInputChange(inputIdentifier, newvalue) {
    setInputComponent((prevState) => {
      return {
        ...prevState,
        [inputIdentifier]: +newvalue,
      };
    });
  }

  const checkValidInput = () => {
    return inputComponent.duration > 0;
  };

  return (
    <>
      <InputComponent
        onChangeInput={handleInputChange}
        initialInput={inputComponent}
      />
      {!checkValidInput() && (
        <p className="center">Please enter a valid duration</p>
      )}
      {checkValidInput() && <Results initialInput={inputComponent} />}
    </>
  );
}

export default App;
