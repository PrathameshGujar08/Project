import React, { FC, useEffect, useRef } from 'react';
interface RelayProps {
  x: number,
  y: number
}

const Relay: FC<RelayProps> = (props: any) => {

  return (
      <g fill="white" stroke="black" strokeWidth="0.5">
        <circle cx={props.x + 22} cy={props.y} r="5" />
        <circle cx={props.x + 11} cy={props.y} r="5" />
        <circle cx={props.x} cy={props.y} r="5" />
        <circle cx={props.x - 11} cy={props.y} r="5" />
        <circle cx={props.x - 22} cy={props.y} r="5" />
        <circle cx={props.x - 33} cy={props.y} r="5" />
      </g>
  );
};

Relay.propTypes = {
};

export default Relay;
