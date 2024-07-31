import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Draggable from 'react-draggable';

const Relay = (props: any) => {

  return (
        <Draggable grid={[5, 5]}>
            <g fill="white" stroke="black" strokeWidth="0.5">
            <circle cx="22" cy="20" r="5" />
            <circle cx="11" cy="20" r="5" />
            <circle cx="0" cy="20" r="5" />
            <circle cx="-11" cy="20" r="5" />
            <circle cx="-22" cy="20" r="5" />
            <circle cx="-33" cy="20" r="5" />
            </g>
        </Draggable>
  );
};

Relay.propTypes = {
};

export default Relay;
