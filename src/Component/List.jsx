import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const List = ({ tasks, deleteTask }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(tasks.length);
    console.log("contador", counter);
  }, [tasks]);

  return (
    <div>
      <ul className="border">
        {tasks.map((task) => (
          <li className="flex justify-between p-2" key={task.id}>
            {task.label}
            <button onClick={deleteTask}>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </li>
        ))}
      </ul>
      {counter > 0 && (
        <div className="p-2 border border-top-0 fw-light">
          Tareas pendientes: {counter}
        </div>
      )}
    </div>
  );
};
List.propTypes = {
  task: PropTypes.object,
  deleteTask: PropTypes.func
};

export default List;
