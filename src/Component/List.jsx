import React from "react";
import PropTypes from "prop-types";

const List = ({ tasks }) => {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.label}</li>
        ))}
      </ul>
    </div>
  );
};
List.propTypes = {
  task: PropTypes.object
};

export default List;
