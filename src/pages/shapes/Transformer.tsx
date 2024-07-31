import Draggable from "react-draggable"

interface transformer{
  id: string, value: string, x: number, y: number
}
export const Transformer:React.FC<transformer> = ({id,x,y}) => {
  return(
    <Draggable grid={[5, 5]}>
      <g>
        <ellipse cx="11.5" cy="12.5" rx="5" ry="5" fillOpacity="0.25" fill="rgb(255, 255, 255)" stroke="black" pointerEvents="all" />
        <ellipse cx="19.5" cy="12.5" rx="5" ry="5" fillOpacity="0.25" fill="rgb(255, 255, 255)" stroke="black" pointerEvents="all" />
        <ellipse cx="16" cy="5.5" rx="5" ry="5" fillOpacity="0.25" fill="rgb(255, 255, 255)" stroke="black" pointerEvents="all" />
        <path d="M 9 10 L 13 12 L 9 14 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" strokeMiterlimit="10" transform="rotate(-90,11,12)" pointerEvents="all" />
        <path d="M 14.6 3.6 L 16 5" fill="none" stroke="green" strokeMiterlimit="10" pointerEvents="stroke" />
        <path d="M 16 5 L 17.4 3.6" fill="none" stroke="green" strokeMiterlimit="10" pointerEvents="stroke" />
        <path d="M 16 5 L 16 7" fill="none" stroke="green" strokeMiterlimit="10" pointerEvents="stroke" />
        <path d="M 18.6 11.6 L 20 13" fill="none" stroke="green" strokeMiterlimit="10" pointerEvents="stroke" />
        <path d="M 20 13 L 21.4 11.6" fill="none" stroke="green" strokeMiterlimit="10" pointerEvents="stroke" />
        <path d="M 20 13 L 20 15" fill="none" stroke="green" strokeMiterlimit="10" pointerEvents="stroke" />
      </g>
    </Draggable>

);
}

