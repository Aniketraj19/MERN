import { memo, useMemo, useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  let temp = useMemo(() => {
    console.log("rerendering");
    let sum = 0;
    let num = Number(text);
    for (let i = 1; i <= num; i++) {
      sum = sum + i;
    }
    return sum;
  }, [text]);

  const inputFunction = useCallback(() => {
    console.log("hello i am input");
  }, []);

  // function inputFunction() {
  //   console.log("hello no callback");
  // }
  return (
    <div>
      <ButtonComponent inputFunction={inputFunction} />
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="enter a number"
      />
      <br />
      <label>entered digit is is : {temp}</label>
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Counter is : {count}
      </button>
    </div>
  );
}

const ButtonComponent = memo(({ inputFunction }) => {
  console.log("rendering button Component");
  return (
    <div>
      <button
        onClick={() => {
          console.log("clicked the button component");
        }}
      >
        Clicked me
      </button>
    </div>
  );
});

export default App;
