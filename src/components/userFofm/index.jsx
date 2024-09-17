import React, { useState } from "react";
import { connect } from "react-redux";
import { setUserInfo } from "../../redux/actions/actions";

const UserForm = ({ setUserInfo }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo({ name, status });
    setName("");
    setStatus("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Status:</label>
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        />
      </div>
      <button type="submit">Update User Info</button>
    </form>
  );
};

export default connect(null, { setUserInfo })(UserForm);
