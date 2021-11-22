import { useState } from "react";

function Calc(props) {
  const [formula, setFormula] = useState("");
  let result = "";
  let showType = "";
  let showMessage = "";

  const genButton = (value, key, type, func) => {
    return (
      <button className={"btn btn-" + type} onClick={func} value={value} key={key}>{value}</button>
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
    showMessage = "正常に計算ができたよ！";
  } catch (e) {
    result = e.message;
    showType = "danger";
    showMessage = "式が正しくありません！正しく入力されるのをお待ちしております。";
  }

  return (
    <div>
      <div className={"alert alert-" + showType} role="alert">
        <h4 className="alert-heading">{showMessage}</h4>
        <hr />
        {result}
      </div>
      <div className="alert alert-secondary" role="alert">
        <h4 className="alert-heading">式</h4>
        <hr />
        {formula}
      </div>
      {["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "00", "000", "."].map((value, key) => genButton(value, key, "primary", writeFormula))}
      {["+", "-", "*", "/", "(", ")"].map((value, key) => genButton(value, key, "success", writeFormula))}
      <button className="btn btn-warning" onClick={delOneChar}>一文字消す</button>
      <button className="btn btn-danger" onClick={allClear}>全部消す</button>
    </div>
  )
}

export default Calc;