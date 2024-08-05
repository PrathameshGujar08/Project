import Draggable from "react-draggable"

interface transformer{
  id: string, value: string, x: number, y: number
}
export const Transformer = (id:string,value:string,x:number,y:number,color:string):string => {
  const scalingFactor = 0.36
  return(
    `<svg>
      <g id={id} style={{transform:"translate(${x} ${y})"}}>
        <ellipse
          cx=${47.5 * scalingFactor}
          cy=${82.5 * scalingFactor}
          rx=${27.5 * scalingFactor}
          ry=${27.5 * scalingFactor}
          fillOpacity="0.25"
          fill=${color}
          stroke="black"
          pointerEvents="all"
        />
        <ellipse
          cx=${87.5 * scalingFactor}
          cy=${82.5 * scalingFactor}
          rx=${27.5 * scalingFactor}
          ry=${27.5 * scalingFactor}
          fillOpacity="0.25"
          fill=${color}
          stroke="black"
          pointerEvents="all"
        />
        <ellipse
          cx=${70.5 * scalingFactor}
          cy=${47.5 * scalingFactor}
          rx=${27.5 * scalingFactor}
          ry=${27.5 * scalingFactor}
          fillOpacity="0.25"
          fill=${color}
          stroke="black"
          pointerEvents="all"
        />
        <path
          d={"M ${35 * scalingFactor} ${72 * scalingFactor} L ${55 * scalingFactor} ${82 * scalingFactor} L ${35 * scalingFactor} ${92 * scalingFactor} Z"}
          fill=${color}
          stroke="rgb(0, 0, 0)"
          strokeMiterlimit="10"
          transform={"rotate(-90, ${45 * scalingFactor}, ${82 * scalingFactor})"}
          pointerEvents="all"
        />
        <path
          d={"M ${63 * scalingFactor} ${38 * scalingFactor} L ${70 * scalingFactor} ${45 * scalingFactor}"}
          fill="none"
          stroke="green"
          strokeMiterlimit="10"
          pointerEvents="stroke"
        />
        <path
          d={"M ${70 * scalingFactor} ${45 * scalingFactor} L ${77 * scalingFactor} ${38 * scalingFactor}"}
          fill="none"
          stroke="green"
          strokeMiterlimit="10"
          pointerEvents="stroke"
        />
        <path
          d={"M ${70 * scalingFactor} ${45 * scalingFactor} L ${70 * scalingFactor} ${55 * scalingFactor}"}
          fill="none"
          stroke="green"
          strokeMiterlimit="10"
          pointerEvents="stroke"
        />
        <path
          d={"M ${83 * scalingFactor} ${78 * scalingFactor} L ${90 * scalingFactor} ${85 * scalingFactor}"}
          fill="none"
          stroke="green"
          strokeMiterlimit="10"
          pointerEvents="stroke"
        />
        <path
          d={"M ${90 * scalingFactor} ${85 * scalingFactor} L ${97 * scalingFactor} ${78 * scalingFactor}"}
          fill="none"
          stroke="green"
          strokeMiterlimit="10"
          pointerEvents="stroke"
        />
        <path
          d={"M ${90 * scalingFactor} ${85 * scalingFactor} L ${90 * scalingFactor} ${95 * scalingFactor}"}
          fill="none"
          stroke="green"
          strokeMiterlimit="10"
          pointerEvents="stroke"
        />
        <path
          d={"M ${70 * scalingFactor} ${20 * scalingFactor} L ${70 * scalingFactor} ${0 * scalingFactor}"}
          fill="none"
          stroke="rgb(0, 0, 0)"
          strokeMiterlimit="10"
          pointerEvents="stroke"
        />
        <path
          d={"M ${45 * scalingFactor} ${129 * scalingFactor} L ${45 * scalingFactor} ${109 * scalingFactor}"}
          fill="none"
          stroke="rgb(0, 0, 0)"
          strokeMiterlimit="10"
          pointerEvents="stroke"
        />
        <path
          d={"M ${91 * scalingFactor} ${129 * scalingFactor} L ${91 * scalingFactor} ${109 * scalingFactor}"}
          fill="none"
          stroke="rgb(0, 0, 0)"
          strokeMiterlimit="10"
          pointerEvents="stroke"
        />
      </g>
      </svg>`
);
}

