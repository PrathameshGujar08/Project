import React, { useState } from "react";
import "@/styles/globals.css";
import Relay from "./shapes/Relay"

export default function App() {

  return (
    <>
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
