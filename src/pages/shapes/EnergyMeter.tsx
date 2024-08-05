import React from 'react';
import Draggable from 'react-draggable';

const scale = 0.1; // Shrinking factor (50%)

const EnergyMeter: React.FC = () => (
    <g>
      <rect
        x={100 * scale}
        y={75 * scale}
        width={279 * scale}
        height={10 * scale}
        fill="#9bec00"
        stroke="none"
        pointerEvents="all"
      />
      <rect
        x={294.63 * scale}
        y={74.87 * scale}
        width={160 * scale}
        height={10 * scale}
        fill="#9bec00"
        stroke="none"
        transform={`rotate(90, ${(374.63 * scale)}, ${(79.87 * scale)})`}
        pointerEvents="all"
      />
      <path
        d={`M ${(387.77 * scale)} ${(120.81 * scale)} C ${(380.15 * scale)} ${(121.87 * scale)} ${(372.6 * scale)} ${(118.48 * scale)} ${(368.34 * scale)} ${(112.07 * scale)} C ${(364.08 * scale)} ${(105.66 * scale)} ${(363.88 * scale)} ${(97.38 * scale)} ${(367.82 * scale)} ${(90.77 * scale)} C ${(371.75 * scale)} ${(84.16 * scale)} ${(379.13 * scale)} ${(80.39 * scale)} ${(386.79 * scale)} ${(81.08 * scale)}`}
        fill="none"
        stroke="rgb(0, 0, 0)"
        strokeWidth={2 * scale}
        strokeMiterlimit="10"
        transform={`rotate(-180, ${(385 * scale)}, ${(101 * scale)})`}
        pointerEvents="all"
      />
      <path
        d={`M ${(388.77 * scale)} ${(80.81 * scale)} C ${(381.15 * scale)} ${(81.87 * scale)} ${(373.6 * scale)} ${(78.48 * scale)} ${(369.34 * scale)} ${(72.07 * scale)} C ${(365.08 * scale)} ${(65.66 * scale)} ${(364.88 * scale)} ${(57.38 * scale)} ${(368.82 * scale)} ${(50.77 * scale)} C ${(372.75 * scale)} ${(44.16 * scale)} ${(380.13 * scale)} ${(40.39 * scale)} ${(387.79 * scale)} ${(41.08 * scale)}`}
        fill="none"
        stroke="rgb(0, 0, 0)"
        strokeWidth={2 * scale}
        strokeMiterlimit="10"
        transform={`rotate(178, ${(386 * scale)}, ${(61 * scale)})`}
        pointerEvents="all"
      />
      <path
        d={`M ${(385 * scale)} ${(121 * scale)} L ${(357 * scale)} ${(121 * scale)}`}
        fill="none"
        stroke="rgb(0, 0, 0)"
        strokeWidth={2 * scale}
        strokeMiterlimit="10"
        pointerEvents="stroke"
      />
      <path
        d={`M ${(385 * scale)} ${(41 * scale)} L ${(357 * scale)} ${(41 * scale)}`}
        fill="none"
        stroke="rgb(0, 0, 0)"
        strokeWidth={2 * scale}
        strokeMiterlimit="10"
        pointerEvents="stroke"
      />
      <path
        d={`M ${(385 * scale)} ${(81 * scale)} L ${(370 * scale)} ${(81 * scale)}`}
        fill="none"
        stroke="rgb(0, 0, 0)"
        strokeWidth={2 * scale}
        strokeMiterlimit="10"
        pointerEvents="stroke"
      />
      <ellipse
        cx={42 * scale}
        cy={79.87 * scale}
        rx={40 * scale}
        ry={40 * scale}
        fill="none"
        stroke="#9bec00"
        strokeWidth={5 * scale}
        pointerEvents="all"
      />
      <g transform={`translate(${(-0.5 * scale)}, ${(-0.5 * scale)})`}>
        <switch>
          <foreignObject
            pointerEvents="none"
            width="100%"
            height="100%"
            requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
            style={{ overflow: 'visible', textAlign: 'left' }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: `${78 * scale}px`,
                height: '1px',
                paddingTop: `${80 * scale}px`,
                marginLeft: `${3 * scale}px`
              }}
            >
              <div
                data-drawio-colors="color: rgb(0, 0, 0);"
                style={{
                  boxSizing: 'border-box',
                  fontSize: '0px',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    display: 'inline-block',
                    fontSize: `${12 * scale}px`,
                    fontFamily: 'Helvetica',
                    color: 'rgb(0, 0, 0)',
                    lineHeight: '1.2',
                    pointerEvents: 'all',
                    whiteSpace: 'normal',
                    overflowWrap: 'normal'
                  }}
                >
                  <b>
                    <p style={{ fontSize: `${21 * scale}px`,color:"#9bec00" }}>
                      MFM
                    </p>
                  </b>
                </div>
              </div>
            </div>
          </foreignObject>
          <text
            x={42 * scale}
            y={83 * scale}
            fill="rgb(0, 0, 0)"
            fontFamily="Helvetica"
            fontSize={`${12 * scale}px`}
            textAnchor="middle"
          >
            MFM
          </text>
        </switch>
      </g>
    </g>
);

export default EnergyMeter;
