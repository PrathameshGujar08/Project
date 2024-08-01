import React, { useState } from "react";
import "@/styles/globals.css";
import Relay from "./shapes/Relay"
import Inverter from "./shapes/Inverter";
import { Transformer } from "./shapes/Transformer";
import EnergyMeter from "./shapes/EnergyMeter";
import Breaker from "./shapes/Breaker";


export default function App() {
  function a(ref:React.ForwardedRef<HTMLOrSVGElement>,id:string){
    console.log(ref, id);
  }
  return (
    <>
      <svg
      width={'99vw'}
      height={"99vh"}
        viewBox="0 0 100 100"
        className="svgparent"
        // style={{ border: "1px solid black" }}
      >
        <Relay />
        <Inverter uniqueId="123" value="LT Panel-1" x={20} y={50} />
        <Transformer id="transformer1" value="" x={40} y={40}/>
        <EnergyMeter/>
        <Breaker/>
      </svg>
    </>
  );
}
