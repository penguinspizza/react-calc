import { useState } from "react";

function Calc(props) {
  const [formula, setFormula] = useState("");
  let result = "";
  let showType = "";
  let showMessage = "";

  const genButton = (value, key, type, func) => {
    return (
      <div className="text-center p-2">
        <button className={"col btn btn-" + type} onClick={func} value={value} key={key}>{value}</button>
      </div>
    )
  }

  const writeFormula = (e) => {
    setFormula(formula + e.target.value);
  }

  const delOneChar = () => {
    setFormula(formula.slice(0, -1));
  }

  const allClear = () => {
    setFormula("");
  }

  try {
    result = eval(formula);
    showType = "primary";
    showMessage = "正常に計算できました";
  } catch (e) {
    result = e.message;
    showType = "danger";
    showMessage = "式が正しくありません";
  }

  return (
    <div>
      <div className={"mt-3 alert alert-" + showType} role="alert">
        <h4 className="alert-heading">{showMessage}</h4>
        <hr />
        {result}
      </div>
      <div className="alert alert-secondary" role="alert">
        <h4 className="alert-heading">式</h4>
        <hr />
        {formula}
      </div>
      <div className="row row-cols-2">
        <div className="text-center p-2">
          <button className="col btn btn-warning" onClick={delOneChar}>一文字消す</button>
        </div>
        <div className="text-center p-2">
          <button className="col btn btn-danger" onClick={allClear}>全部消す</button>
        </div>
      </div>
      <div className="row row-cols-3">
        {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "000", "."].map((value, key) => genButton(value, key, "primary", writeFormula))}
        {["+", "-", "*", "/", "(", ")"].map((value, key) => genButton(value, key, "success", writeFormula))}
        {["Math.PI", "Math.abs(", "Math.log10(", "Math.sin(", "Math.cos(", "Math.tan("].map((value, key) => genButton(value, key, "info", writeFormula))}
      </div>
    </div>
  )
}

export default Calc;