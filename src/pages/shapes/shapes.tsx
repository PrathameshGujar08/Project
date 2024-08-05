export function Rectangle(context:CanvasRenderingContext2D,width:number,height:number,x:number,y:number,color:string){
        context.fillStyle = "blue";
      context.fillRect(x, y, width, height);
}

function drawCircle(context:CanvasRenderingContext2D,x:number,y:number,radius:number){
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2, true);
  context.fillStyle = "transparent";
  context.fill();
  context.stroke();
  context.font = '8pt Calibri';
  // context.fillStyle = 'red';
  context.textAlign = 'center';
  context.fillText('0', x, y+3);
}

export function Relay(context:CanvasRenderingContext2D,x:number,y:number,radius:number){
  
  for(let i = 0;i<6;i++){
    drawCircle(context,x+20+2*(i)*radius,y,radius)
  }
  // Begin a new path for the second circle
  
}
export function Transformer(context:CanvasRenderingContext2D,x:number,y:number){
  const scalingFactor = 1;

  // Set transform for the entire drawing
  context.translate(x, y);

  // Draw ellipses
  const ellipses = [
    { cx: 47.5, cy: 82.5, rx: 27.5, ry: 27.5 },//bottom left
    { cx: 87.5, cy: 82.5, rx: 27.5, ry: 27.5 },//bottom right
    { cx: 70.5, cy: 47.5, rx: 27.5, ry: 27.5 },//top
  ];
  ellipses.forEach((ellipse,index) => {
    context.beginPath();
    context.ellipse(
      ellipse.cx * scalingFactor,
      ellipse.cy * scalingFactor,
      ellipse.rx * scalingFactor,
      ellipse.ry * scalingFactor,
      0,
      0,
      2 * Math.PI
    );
    context.fillStyle = 'rgba(255, 255, 255, 0.25)';
    context.fill();
    context.strokeStyle = "black";
    context.stroke();
  });

  // Draw triangles
  context.beginPath();
  context.moveTo(44 * scalingFactor, 74 * scalingFactor);//top
  context.lineTo(58 * scalingFactor, 94 * scalingFactor);//right
  context.lineTo(30 * scalingFactor, 94 * scalingFactor);//left
  context.closePath();
  context.fillStyle = 'rgb(255, 255, 255)';
  context.fill();
  context.strokeStyle = 'rgb(0, 0, 0)';
  context.stroke();

  // Draw green lines
  const greenLines = [
    { x1: 63, y1: 38, x2: 70, y2: 45 },
    { x1: 70, y1: 45, x2: 77, y2: 38 },
    { x1: 70, y1: 45, x2: 70, y2: 55 },
    { x1: 83, y1: 78, x2: 90, y2: 85 },
    { x1: 90, y1: 85, x2: 97, y2: 78 },
    { x1: 90, y1: 85, x2: 90, y2: 95 },
  ];
  context.strokeStyle = 'green';
  greenLines.forEach(line => {
    context.beginPath();
    context.moveTo(line.x1 * scalingFactor, line.y1 * scalingFactor);
    context.lineTo(line.x2 * scalingFactor, line.y2 * scalingFactor);
    context.stroke();
  });

  // Draw black lines
  const blackLines = [
    { x1: 70, y1: 20, x2: 70, y2: 0 },//top
    { x1: 45, y1: 129, x2: 45, y2: 109 },//left bottom
    { x1: 91, y1: 129, x2: 91, y2: 109 },//right bottom
  ];
  context.strokeStyle = 'rgb(0, 0, 0)';
  blackLines.forEach(line => {
    context.beginPath();
    context.moveTo(line.x1 * scalingFactor, line.y1 * scalingFactor);
    context.lineTo(line.x2 * scalingFactor, line.y2 * scalingFactor);
    context.stroke();
  });

}