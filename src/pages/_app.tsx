// import Menu from "@/Components/Menu";
// import Sidebar from "@/Components/Sidebar";
// import React, { useRef, useEffect, useState } from "react";
// import "../styles/app.css"
// import { Rectangle, Relay, Transformer } from "./shapes/shapes";
 
// function App() {
//   const canvasRef:React.RefObject<HTMLCanvasElement> = useRef(null);
//   const [rect, setRect] = useState({ x: 100, y: 100, width: 200, height: 150 });
//   const [circle, setCircle] = useState({ x: 200, y:100, radius: 50 });
//   const [dragging, setDragging] = useState(null);
//   const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
 
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas?.getContext("2d");
//     if(!context)return;
//     // Set canvas size
//     canvas?.setAttribute("width",`${window.innerWidth}`)
//     canvas?.setAttribute("height",`${window.innerHeight}`)
 
//     // Draw the shapes
//     const drawShapes = () => {
      
//       // Draw rectangle
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         context.strokeStyle = "black";
//         context.strokeRect(0, 0, canvas.width, canvas.height);
//         Rectangle(context,rect.width,rect.height,rect.x,rect.y)
//       // Draw circle
//       Relay(context,circle.x,circle.y,circle.radius)
//       Transformer(context,100,300)
//     };
 
//     drawShapes();
//   }, [rect, circle]);
 
//   const handleMouseDown = (e) => {
//     const canvas = canvasRef.current;
//     const rectCanvas = canvas.getBoundingClientRect();
//     const mouseX = e.clientX - rectCanvas.left;
//     const mouseY = e.clientY - rectCanvas.top;
 
//     // Check if the mouse is inside the rectangle
//     if (
//       mouseX > rect.x &&
//       mouseX < rect.x + rect.width &&
//       mouseY > rect.y &&
//       mouseY < rect.y + rect.height
//     ) {
//       setDragging("rect");
//       setDragOffset({ x: mouseX - rect.x, y: mouseY - rect.y });
//     }
//     // Check if the mouse is inside the circle
//     else if (
//       Math.sqrt((mouseX - circle.x) ** 2 + (mouseY - circle.y) ** 2) <
//       circle.radius
//     ) {
//       setDragging("circle");
//       setDragOffset({ x: mouseX - circle.x, y: mouseY - circle.y });
//     }
//   };
 
//   const handleMouseMove = (e) => {
//     if (dragging) {
//       const canvas = canvasRef.current;
//       const rectCanvas = canvas.getBoundingClientRect();
//       const mouseX = e.clientX - rectCanvas.left;
//       const mouseY = e.clientY - rectCanvas.top;
 
//       if (dragging === "rect") {
//         setRect({
//           ...rect,
//           x: mouseX - dragOffset.x,
//           y: mouseY - dragOffset.y,
//         });
//       } else if (dragging === "circle") {
//         setCircle({
//           ...circle,
//           x: mouseX - dragOffset.x,
//           y: mouseY - dragOffset.y,
//         });
//       }
//     }
//   };
 
//   const handleMouseUp = (e) => {
//     setDragging(null);
//   };
 
//   return (
//     <>
//       {/* <Sidebar /> */}
//       <Menu />
//       <div className="App">
//         <h1>Canvas with Draggable Rectangle and Circle</h1>
//         <canvas
//           ref={canvasRef}
//           onMouseDown={handleMouseDown}
//           onMouseMove={handleMouseMove}
//           onMouseUp={handleMouseUp}
//           onMouseLeave={handleMouseUp} // Handle case when mouse leaves canvas while dragging
//           style={{ border: "1px solid black" }}
//         />
//       </div>
//     </>
//   );
// }
 
// export default App;
 
 
import React, { useRef, useState, useEffect } from 'react';
import { Rectangle, Relay, Transformer } from './shapes/shapes';
import "../styles/app.css"

interface Shape {
  id: number;
  type: 'rectangle' | 'circle' | 'transformer';
  x: number;
  y: number;
  width?: number;
  height?: number;
  radius?: number;
  color?: string;
}

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dragging, setDragging] = useState<boolean>(false);
  const [draggedShapeId, setDraggedShapeId] = useState<number | null>(null);
  const [offset, setOffset] = useState<{ x: number; y: number } | null>(null);
  const [shapes, setShapes] = useState<Shape[]>([
    { id: 1, type: 'rectangle', x: 50, y: 50, width: 100, height: 100, color: 'blue' },
    { id: 2, type: 'circle', x: 200, y: 200, radius: 15, color: 'red' },
    { id: 3, type: 'transformer', x: 300, y: 300, width: 100, height: 100, color: 'green' },
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    canvas.width = window.innerHeight
    canvas.height = window.innerHeight

    if (context) {
      context.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

      shapes.forEach(shape => {
        context.strokeStyle = 'black';
        context.strokeRect(0, 0, canvas.width, canvas.height);

        switch (shape.type) {
          case 'rectangle':
            Rectangle(context, shape.width, shape.height, shape.x, shape.y,shape.color);
            break;
          case 'circle':
            Relay(context, shape.x, shape.y, shape.radius);
            break;
          case 'transformer':
            Transformer(context, shape.x, shape.y);
            break;
          default:
            break;
        }
      });
    }
  }, [shapes]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const shape = shapes.find(shape => 
      x >= shape.x && x <= shape.x + (shape.width || 0) &&
      y >= shape.y && y <= shape.y + (shape.height || 0)
    );

    if (shape) {
      setDragging(true);
      setDraggedShapeId(shape.id);
      setOffset({ x: x - shape.x, y: y - shape.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging || !offset || draggedShapeId === null) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newShapes = shapes.map(shape =>
      shape.id === draggedShapeId
        ? { ...shape, x: x - offset.x, y: y - offset.y }
        : shape
    );

    setShapes(newShapes);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div className='App'>
    <canvas
      ref={canvasRef}
      style={{ border: '1px solid black' }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    />
    </div>
  );
};

export default App;
