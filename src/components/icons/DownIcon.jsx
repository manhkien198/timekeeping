import React from 'react';

function DownIcon(props) {
  return (
    <span style={props.style}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
      >
        <path
          d="M1 1L7 7L13 1"
          stroke="#066F9B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default DownIcon;
