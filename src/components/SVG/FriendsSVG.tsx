import { FC } from 'react';

const FriendsSVG: FC = () => {
  return (
    <>
      <svg
        width="22"
        height="17"
        viewBox="0 0 22 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 16C13 12.6863 10.3137 10 7 10C3.68629 10 1 12.6863 1 16"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M21 15C21 12.7909 18.8931 11 16.2941 11C15.0116 11 13.8488 11.4361 13 12.1434"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="7" cy="4" r="3" strokeWidth="2" />
        <circle cx="16.5" cy="6" r="2" strokeWidth="2" />
      </svg>
    </>
  );
};

export default FriendsSVG;
