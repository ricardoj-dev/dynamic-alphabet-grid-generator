import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";

import { MyRouter } from "@/components/my-router/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MyRouter />
  </React.StrictMode>
);
