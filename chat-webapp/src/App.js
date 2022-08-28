import logo from "./logo.svg";
import "./App.css";
import { LoginPage } from "./page/login/login.page";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { socket } from "./providers/socket/socket";
import { ChatPage } from "./page/chat/chat.page";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    socket.on("connect", () => {
      setIsLogin(true);
    });

    socket.on("connect_error", () => {
      setIsLogin(false);
    });

    socket.on("disconnect", () => {
      setIsLogin(false);
    });

    return () => {
      socket.off("connect");
      socket.off("connect_error");
      socket.off("disconnect");
    };
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {!isLogin ? (
              <Route index element={<LoginPage />} />
            ) : (
              <Route index element={<ChatPage />} />
            )}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
