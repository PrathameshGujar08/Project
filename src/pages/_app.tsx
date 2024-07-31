import React, { useEffect, useState } from "react";
import "@/styles/globals.css";
import Relay from "./shapes/Relay";
import Inverter from "./shapes/Inverter";
import { Transformer } from "./shapes/Transformer";
import CustomGroup from "./shapes/CustomGroup";
import Menu from "@/Components/Menu";
import MenuItems from "../utils/MenuItems.json"
import { MenuItemInterface } from "@/interfaces/MenuItemInterface";

export default function App() {
  const [shapes, addShape] = useState([]);
  // const shapes = [
  //   { name: "Relay", x: 50, y: 50 },
  //   { name: "Inverter", x: 20, y: 50 },
  // ];

  // useEffect(()=>{
  //   console.log(MenuItems)
  // })

  const insertShape = (shape) => {
    addShape((prevShapes) => [...prevShapes, shape]);
    console.log("first")
};


  return (
    <>
      <Menu insertShape={insertShape}/>
      <svg
        width={"98vw"}
        height={"97vh"}
        viewBox="0 0 100 100"
      >
        {shapes.map((shape, index) => {
          if (shape.name === "Relay") {
            return <Relay key={index} x={shape.x} y={shape.y} />;
          } else if (shape.name === "Inverter") {
            return <Inverter key={index} uniqueId={`inverter-${index}`} value="Inverter" x={shape.x} y={shape.y} />;
          } else if (shape.name === "Transformer") {
            return <Transformer key={index} id={`transformer-${index}`} value="" x={shape.x} y={shape.y} />;
          } else if (shape.name === "CustomGroup") {
            return <CustomGroup key={index} id={`customgroup-${index}`} x={shape.x} y={shape.y} />;
          }
          return null; // Add a fallback for other shapes
        })}
      </svg>
    </>
  );
}
