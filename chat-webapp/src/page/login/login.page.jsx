import React, { useState } from "react";
import { socket } from "../../providers/socket/socket";

export const LoginPage = () => {
  const [username, setUsername] = useState("");

  const onConnect = () => {
    socket.auth = {
      username,
    };
    socket.connect();
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h2>Login</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          maxWidth: "200px",
          gridRowGap: "10px",
        }}
      >
        <input
          name="username"
          placeholder="Enter username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button onClick={onConnect}>Connect</button>
      </div>
    </div>
  );
};
