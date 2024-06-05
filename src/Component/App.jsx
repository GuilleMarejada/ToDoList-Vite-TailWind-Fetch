import { useState, useEffect } from "react";
import "./App.css";
import User from "./User";
import List from "./List";

function App({}) {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [userName, setUserName] = useState("");
  let newTask = {};

  const deleteTask = (idToDelete) => {
    return(
      const upDateTask = tasks.filter((tasks)=>)
    )
  }

  const newTaskAPI = async (username, newTask) => {
    try {
      const response = await fetch(
        `https://playground.4geeks.com/todo/todos/${username}`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTask),
        }
      );
      await response.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("input", taskInput);
  }, [taskInput]);

  useEffect(() => {
    console.log("Save", tasks);
  }, [tasks]);

  const inputValue = (event) => {
    setTaskInput(event.target.value);
  };

  const saveTask = (e) => {
    if (e.code == "Enter") {
      newTask = { label: taskInput, id: taskInput, is_done: false };
      newTaskAPI(userName, newTask);
      setTasks([...tasks, newTask]);
      setTaskInput("");
    }
  };

  return (
    <>
      <User userName={userName} setUserName={setUserName} />
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
        <List deleteTask={deleteTask} tasks={tasks} />
      </div>
    </>
  );
}

export default App;
