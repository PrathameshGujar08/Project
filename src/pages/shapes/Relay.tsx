import React, { FC, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

interface RelayProps {
  x: number,
  y: number
}

const Relay: FC<RelayProps> = (props: any) => {

  return (
    <Draggable grid={[5, 5]}>
      <g fill="white" stroke="black" strokeWidth="0.5">
        <circle cx={props.x + 22} cy={props.y} r="5" />
        <circle cx={props.x + 11} cy={props.y} r="5" />
        <circle cx={props.x} cy={props.y} r="5" />
        <circle cx={props.x - 11} cy={props.y} r="5" />
        <circle cx={props.x - 22} cy={props.y} r="5" />
        <circle cx={props.x - 33} cy={props.y} r="5" />
      </g>
    </Draggable>
  );
};

Relay.propTypes = {
};

export default Relay;
