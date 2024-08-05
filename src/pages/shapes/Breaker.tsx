import React from 'react';

const scale = 0.1; // Shrinking factor (50%)

const Breaker: React.FC = () => (
  <>
    <g>
      <path
        d={`M ${25 * scale} ${214 * scale} L ${25 * scale} ${14 * scale}`}
        fill="none"
        stroke="#66ff66"
        strokeWidth={7 * scale}
        strokeMiterlimit="10"
        pointerEvents="stroke"
      />
      <ellipse
        cx={25 * scale}
        cy={74 * scale}
        rx={10 * scale}
        ry={10 * scale}
        fill="#80ff00"
        stroke="#66ff66"
        strokeWidth={7 * scale}
        pointerEvents="all"
      />
      <ellipse
        cx={25 * scale}
        cy={154 * scale}
        rx={10 * scale}
        ry={10 * scale}
        fill="#80ff00"
        stroke="#66ff66"
        strokeWidth={7 * scale}
        pointerEvents="all"
      />
      <path
        d={`M ${25 * scale} ${184 * scale} L ${45 * scale} ${164 * scale}`}
        fill="none"
        stroke="#66ff66"
        strokeWidth={7 * scale}
        strokeMiterlimit="10"
        pointerEvents="stroke"
      />
      <path
        d={`M ${25 * scale} ${184 * scale} L ${5 * scale} ${164 * scale}`}
        fill="none"
        stroke="#66ff66"
        strokeWidth={7 * scale}
        strokeMiterlimit="10"
        pointerEvents="stroke"
      />
      <path
        d={`M ${25 * scale} ${44 * scale} L ${5 * scale} ${64 * scale}`}
        fill="none"
        stroke="#66ff66"
        strokeWidth={7 * scale}
        strokeMiterlimit="10"
        pointerEvents="stroke"
      />
      <path
        d={`M ${25 * scale} ${44 * scale} L ${45 * scale} ${64 * scale}`}
        fill="none"
        stroke="#66ff66"
        strokeWidth={7 * scale}
        strokeMiterlimit="10"
        pointerEvents="stroke"
      />
      <path
        d={`M ${25 * scale} ${16 * scale} L ${5 * scale} ${36 * scale}`}
        fill="none"
        stroke="#66ff66"
        strokeWidth={7 * scale}
        strokeMiterlimit="10"
        pointerEvents="stroke"
      />
      <path
        d={`M ${25 * scale} ${16 * scale} L ${45 * scale} ${36 * scale}`}
        fill="none"
        stroke="#66ff66"
        strokeWidth={7 * scale}
        strokeMiterlimit="10"
        pointerEvents="stroke"
      />
      <path
        d={`M ${25 * scale} ${211 * scale} L ${45 * scale} ${191 * scale}`}
        fill="none"
        stroke="#66ff66"
        strokeWidth={7 * scale}
        strokeMiterlimit="10"
        pointerEvents="stroke"
      />
      <path
        d={`M ${25 * scale} ${211 * scale} L ${5 * scale} ${191 * scale}`}
        fill="none"
        stroke="#66ff66"
        strokeWidth={7 * scale}
        strokeMiterlimit="10"
        pointerEvents="stroke"
      />
      <rect
        x={20.5 * scale}
        y={0 * scale}
        width={7 * scale}
        height={7 * scale}
        fill="#66ff66"
        stroke="none"
        pointerEvents="all"
      />
      <rect
        x={-0.5 * scale}
        y={110 * scale}
        width={7 * scale}
        height={7 * scale}
        fill="#66ff66"
        stroke="none"
        pointerEvents="all"
      />
      <rect
        x={21.5 * scale}
        y={220 * scale}
        width={7 * scale}
        height={7 * scale}
        fill="#66ff66"
        stroke="none"
        pointerEvents="all"
      />
    </g>
  </>
);

export default Breaker;
