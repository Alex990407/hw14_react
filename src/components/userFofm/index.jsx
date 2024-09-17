import React, { useState } from "react";
import { connect } from "react-redux";
import { setUserInfo } from "../../redux/actions/actions";
import styles from "./styles.module.css";

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
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.div}>
        <label>Name:</label>
        <input
          className={styles.input}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className={styles.div}>
        <label>Status:</label>
        <input
          className={styles.input}
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        />
      </div>
      <button type="submit" className={styles.button}>
        Update User Info
      </button>
    </form>
  );
};

export default connect(null, { setUserInfo })(UserForm);
