import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
interface InverterProps {
  uniqueId: string;
  value: string;
  x: number;
  y: number;
}

const DraggableSVG:React.FC<InverterProps> = ({ uniqueId, x, y,value }) => {

  const elRef = useRef(null);

  const width = 30;
  const height = width/2;
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [initialX, setInitialX] = useState(x);
  const [initialY, setInitialY] = useState(y);
  const [transform, setTransform] = useState(`translate(${x}, ${y})`);

  const handleMouseDown = (e:MouseEvent) => {
    setStartX(e.clientX);
    setStartY(e.clientY);
    setInitialX(x)
    setInitialY(y)

    // console.log(e.target)
  };
  // MouseEventHandler<SVGGElement> 
  const handleMouseMove= (e:MouseEvent) => {
    if (isDragging) {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      setTransform(`translate(${initialX + dx}, ${initialY + dy})`);
      // console.log(e,elRef.current)
      console.log(isDragging)
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false)
  };
  useEffect(()=>{
    
      document.addEventListener("mousedown",handleMouseDown);
      document.addEventListener('mousemove',handleMouseMove);
      document.addEventListener('mouseup',handleMouseUpOrLeave)
    return ()=>{

      document.removeEventListener("mousedown",handleMouseDown);
      document.removeEventListener('mousemove',handleMouseMove);
      document.removeEventListener('mouseup',handleMouseUpOrLeave)
    }
  },)
  
  return (
    <svg
      width="500"
      height="500"
      style={{ border: '1px solid black' }}
    >
      <g
        fill="white"
        stroke="green"
        strokeWidth="0.5"
        id={`Inverter${uniqueId}`}
        transform={transform}
        ref={elRef}
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
    </svg>
  );
};

export default DraggableSVG;


