import React, { useEffect, useState } from "react";
import { socket } from "../../providers/socket/socket";

export const ChatPage = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    console.log("chatpage");
    socket.on("connect", () => {});

    socket.on("users", (mUsers) => {
      setUsers(mUsers);
    });
    return () => {
      socket.off("users");
    };
  });
  return (
    <div>
      <h2>Chat Page</h2>
    </div>
  );
};
