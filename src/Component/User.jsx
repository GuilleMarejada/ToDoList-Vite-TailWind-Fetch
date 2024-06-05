import React, { useState } from "react";
import PropTypes from "prop-types";


const User = ({ setUserName }) => {
  const [userInput, setUserInput] = useState("");
  console.log(userInput);

  const createUser = (event) => {
    if (event.code == "Enter") {
      setUserName(userInput);
    }
  };

  const inputUser = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="m-3">
      <label htmlFor="" className="mx-3">
        Usuario
      </label>
      <input
        type="text"
        className="border w-64"
        placeholder="Introducir nombre de Usuario"
        onKeyDown={createUser}
        onChange={inputUser}
      />
    </div>
  );
};

User.propTypes = {
  setUserName: PropTypes.func
};

export default User;
