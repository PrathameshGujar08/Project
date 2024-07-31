interface transformer{
  id: string, value: string, x: number, y: number
}
export const Transformer:React.FC<transformer> = ({id,x,y}) => {
  return(
  <g transform={`translate(${x}, ${y}) scale(${0.2})`} id={`Transformer${id}`}>
      <ellipse cx="57.5" cy="62.5" rx="27.5" ry="27.5" fillOpacity="0.25" fill="rgb(255, 255, 255)" stroke="black" pointerEvents="all" />
      <ellipse cx="97.5" cy="62.5" rx="27.5" ry="27.5" fillOpacity="0.25" fill="rgb(255, 255, 255)" stroke="black" pointerEvents="all" />
      <ellipse cx="80.5" cy="27.5" rx="27.5" ry="27.5" fillOpacity="0.25" fill="rgb(255, 255, 255)" stroke="black" pointerEvents="all" />
      <path d="M 45 52 L 65 62 L 45 72 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" strokeMiterlimit="10" transform="rotate(-90,55,62)" pointerEvents="all" />
      <path d="M 73 18 L 80 25" fill="none" stroke="green" strokeMiterlimit="10" pointerEvents="stroke" />
      <path d="M 80 25 L 87 18" fill="none" stroke="green" strokeMiterlimit="10" pointerEvents="stroke" />
      <path d="M 80 25 L 80 35" fill="none" stroke="green" strokeMiterlimit="10" pointerEvents="stroke" />
      <path d="M 93 58 L 100 65" fill="none" stroke="green" strokeMiterlimit="10" pointerEvents="stroke" />
      <path d="M 100 65 L 107 58" fill="none" stroke="green" strokeMiterlimit="10" pointerEvents="stroke" />
      <path d="M 100 65 L 100 75" fill="none" stroke="green" strokeMiterlimit="10" pointerEvents="stroke" />
    </g>
);
}

