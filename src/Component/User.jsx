import React, { useState } from "react";
import PropTypes from "prop-types";

const User = ({ setUserName }) => {
  const [userInput, setUserInput] = useState("");

  const newUser = async (username) => {
    try {
      const response = await fetch(
        `https://playground.4geeks.com/todo/users/${username}`,
        {
          method: "POST",
        }
      );
      await response.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const createUser = (event) => {
    if (event.key === "Enter" && userInput.trim() !== "") {
      setUserName(userInput);
      newUser(userInput);
      setUserInput("");
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
        value={userInput}
      />
    </div>
  );
};

User.propTypes = {
  setUserName: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};

export default User;
