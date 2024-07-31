import React, { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';

interface InverterProps {
  uniqueId: string;
  value: string;
  x: number;
  y: number;
}

const DraggableSVG: React.FC<InverterProps> = ({ uniqueId, x, y, value }) => {
  const elRef = useRef<SVGGElement | null>(null);

  const width = 30;
  const height = width / 2;

  return (
    <Draggable grid={[5, 5]}>
      <g
        fill="white"
        stroke="green"
        strokeWidth="0.5"
        scale={0.5}
      >
        <rect width={width} height={height} x={0} y={0} id={`Inverter${uniqueId}Reactangle1`} />
        <rect width={1} height={1} x={(width - 2) / 2} y={-1} id={`Inverter${uniqueId}Reactangle2`} fill='green' />
        <text
          id={`Inverted${uniqueId}Text1`}
          x={0.5 * width}
          y={0.55 * height}
          width={width - 2}
          fontFamily='sans-serif'
          stroke='none'
          fill='black'
          fontSize={2.5}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {value}
        </text>
      </g>
    </Draggable>
  );
};

export default DraggableSVG;
