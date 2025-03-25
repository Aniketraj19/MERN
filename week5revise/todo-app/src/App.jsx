import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "go to gym",
      description: "at 9-10",
      completed: false,
    },
    {
      title: "go to shop",
      description: "bring groceries",
      completed: false,
    },
    {
      title: "go for a haircut",
      description: "go around 10-11",
      completed: false,
    },
  ]);

  function onClickHandler() {
    setTodos([
      ...todos,
      {
        title: "new todo",
        description: "ne todo description",
        completed: false,
      },
    ]);
  }
  return (
    <div>
      <button onClick={onClickHandler}>create todos</button>
      {todos.map(function (todo) {
        return (
          <div>
            <Todos
              title={todo.title}
              description={todo.description}
              completed={todo.completed}
            ></Todos>
          </div>
        );
      })}
    </div>
  );
}

function Todos(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h2>{props.completed}</h2>
    </div>
  );
}

export default App;
