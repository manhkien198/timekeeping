import React from 'react';

function StatisticIcon(props) {
  return (
    <span className="ant-menu-item-icon anticon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="22"
        viewBox="0 0 19 22"
        fill="none"
      >
        <path
          d="M11.5 1H3.5C2.96957 1 2.46086 1.21071 2.08579 1.58579C1.71071 1.96086 1.5 2.46957 1.5 3V19C1.5 19.5304 1.71071 20.0391 2.08579 20.4142C2.46086 20.7893 2.96957 21 3.5 21H15.5C16.0304 21 16.5391 20.7893 16.9142 20.4142C17.2893 20.0391 17.5 19.5304 17.5 19V7L11.5 1Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 1V7H17.5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 12H5.5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 16H5.5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 8H6.5H5.5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default StatisticIcon;
