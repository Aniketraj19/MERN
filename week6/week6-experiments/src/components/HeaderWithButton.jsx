import { useState } from "react";
import { Header } from "./Header";

export function HeaderWithButton() {
  const [rand, setRand] = useState("My name is Aniket");

  return (
    <div>
      <Header title={rand} />
      <button
        onClick={() => {
          setRand("My name is " + Math.random());
        }}
      >
        update the title
      </button>
    </div>
  );
}
