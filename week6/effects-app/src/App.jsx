import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  // const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);

  // useEffect(() => {
  //   axios.get("").then(function (res) {
  //     setTodos(res.data.todos);
  //   });
  // }, []);
  return (
    <div>
      <button onClick={() => setId(1)}>1</button>
      <button onClick={() => setId(2)}>2</button>
      <button onClick={() => setId(3)}>3</button>
      <button onClick={() => setId(4)}>4</button>

      {/* {todos.map(function (todo) {
        <Todo title={todo.title} description={todo.description}></Todo>;
      })} */}
      <Id id={id} />
    </div>
  );
}

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h2>{description}</h2>
//     </div>
//   );
// }
function Id({ id }) {
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}

export default App;
