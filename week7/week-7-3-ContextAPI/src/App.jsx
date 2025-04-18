// Prop Drilling
import { countAtom, evenSelector } from "./store/atoms/count";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

function App() {
  return (
    // wrap any component that wants to use the context api in context.provider to teleport the count variable directly
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
      <EvenSelectorRenderer />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Increase</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrease</button>
    </div>
  );
}

function EvenSelectorRenderer() {
  const isEven = useRecoilValue(evenSelector);
  return <div>{isEven ? "This is odd" : "This is even"}</div>;
}

export default App;
