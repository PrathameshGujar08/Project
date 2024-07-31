import React, { useState } from "react";
import "@/styles/globals.css";
import Relay from "./shapes/Relay";
import Menu from "@/Components/Menu";

export default function App() {

  const [shapes, addShape] = useState([]);

  const RenderShape = () => {
    addShape([...shapes, {{ id: Date.now(), type: "Relay" }}])
    return shapes;
  }

  return (
    <>
      <Menu />
      <svg
        width="100vw"
        height="100vh"
        viewBox="0 0 100 100"
        style={{ border: "1px solid black" }}
      >
        <Relay />
      </svg>
    </>
  );
}
