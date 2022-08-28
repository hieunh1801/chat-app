import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { socketActions } from "../../redux/slices/socket.slice";
import { socket } from "./socket";

export const SocketProvider = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    socket.on("connect", () => {
      dispatch(socketActions.loginSuccess());
    });

    socket.on("disconnect", () => {
      dispatch(socketActions.logout());
    });

    socket.on("connect_error", (err) => {
      dispatch(
        socketActions.loginFailed({
          error: "Login error",
        })
      );
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("message");
      socket.off("connect_error");
    };
  });
  return <>{children}</>;
};
