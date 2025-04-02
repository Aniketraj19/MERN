import { useMemo, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(0);
  function onClickIncrease() {
    setCounter(counter + 1);
  }

  // let sum1 = 0;
  // for (let i = 1; i <= input; i++) {
  //   sum1 = sum1 + i;
  //   console.log("sum 1 running");
  // }

  let sum = useMemo(() => {
    let sum = 0;
    console.log("memo running");
    for (let i = 1; i <= input; i++) {
      sum = sum + i;
    }
    return sum;
  }, [input]);
  return (
    <div>
      <input
        type="text"
        id="inputing"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <br />
      <label>Sum is: {sum}</label>
      <br />
      <button onClick={onClickIncrease}>Counter({counter})</button>
      <br />
    </div>
  );
}

export default App;
