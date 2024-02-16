import React from "react";
import CalculatorButton from "./CalculatorButton";

const CalculatorPad = (props) => {
  return (
    <div id="CalculatorPad" className="grid grid-cols-3 py-6">
      <CalculatorButton className="btn" value={"clr"} callback={props.clear} />
      <CalculatorButton
        className="btn"
        value={"- / +"}
        callback={props.negative}
      />
      <CalculatorButton className="btn" value={"*"} callback={props.operator} />
      <CalculatorButton className="btn" value={"/"} callback={props.operator} />
      <CalculatorButton className="btn" value={"+"} callback={props.operator} />
      <CalculatorButton className="btn" value={"-"} callback={props.operator} />
      <CalculatorButton className="btn" value={9} callback={props.input} />
      <CalculatorButton className="btn" value={8} callback={props.input} />
      <CalculatorButton className="btn" value={7} callback={props.input} />
      <CalculatorButton className="btn" value={6} callback={props.input} />
      <CalculatorButton className="btn" value={5} callback={props.input} />
      <CalculatorButton className="btn" value={4} callback={props.input} />
      <CalculatorButton className="btn" value={3} callback={props.input} />
      <CalculatorButton className="btn" value={2} callback={props.input} />
      <CalculatorButton className="btn" value={1} callback={props.input} />
      <CalculatorButton className="btn" value={"."} callback={props.input} />
      <CalculatorButton className="btn" value={0} callback={props.input} />
      <CalculatorButton
        className="btn"
        value={"="}
        callback={props.calculate}
      />
    </div>
  );
};

export default CalculatorPad;
