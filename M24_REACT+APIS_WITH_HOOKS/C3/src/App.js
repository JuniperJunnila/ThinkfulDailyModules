import React, { useEffect, useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);

  // Load data from https://jsonplaceholder.typicode.com/todos?userId=3

  useEffect(() => {
    const abortControl = new AbortController();

    async function loadToDo() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?userId=3",
          { signal: abortControl.signal }
        );
        const toDoAPI = await response.json()
        setToDos(toDoAPI)
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted", toDoID);
        } else {
          throw error;
        }
      }
    }
    loadToDo()

    return () => abortControl.abort()
  }, []);

  return (
    <div className="App">
      <h1>To Do List</h1>
      <ul className="todo-list">
        {toDos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "",
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
