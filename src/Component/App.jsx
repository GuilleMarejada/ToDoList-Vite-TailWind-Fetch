import { useState } from "react";
import "./App.css";
import User from "./User";
import List from "./List";

function App({}) {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [userName, setUserName] = useState("");
  console.log("input", taskInput);
  console.log("Save", tasks);

  const inputValue = (event) => {
    setTaskInput(event.target.value);
  };

  const saveTask = (e) => {
    if (e.code == "Enter") {
      const newTask = { label: taskInput, id: taskInput, is_done: false };
      setTasks([...tasks, newTask]);
      setTaskInput("");
    }
  };

  return (
    <>
      <User setUserName={setUserName} />
      <div className="grid justify-center">
        <label htmlFor="" className="text-center my-3">
          ToDoList-{userName}
        </label>
        <input
          className="border p-3"
          type="text"
          onChange={inputValue}
          value={taskInput}
          placeholder="Introducir tareas"
          onKeyDown={saveTask}
        />
        <List tasks={tasks}/>
      </div>
    </>
  );
}

export default App;
