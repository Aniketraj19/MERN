import { useState } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { todoAtom } from "./Store/atoms/todo";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Landing />
        <ShowTodos />
      </RecoilRoot>
    </div>
  );
}

function Landing() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const setTodo = useSetRecoilState(todoAtom);

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Enter Title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Enter Description"
      />

      <button
        onClick={() => {
          setTodo((oldTodos) => [...oldTodos, { title, description }]);
          setTitle("");
          setDescription("");
        }}
      >
        Submit
      </button>
    </div>
  );
}

function ShowTodos() {
  const todos = useRecoilValue(todoAtom);
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          {todo.title}
          {todo.description}
        </div>
      ))}
    </div>
  );
  
}

export default App;
