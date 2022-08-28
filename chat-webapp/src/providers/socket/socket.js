import io from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:3001";

export const socket = io(SOCKET_SERVER_URL, {
  autoConnect: false,
});

// logger
socket.onAny((event, ...args) => {
  console.log("[NEW_MESSAGE]", event, args);
});
