import React, { FC } from "react";

interface ArrowUpProps {
  onClick: (e: any) => void;
}

const ArrowUp: FC<ArrowUpProps> = ({ onClick }) => {
  return (
    <svg
      width="8"
      height="10"
      viewBox="0 0 8 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M7.15581 3.69931C7.53708 4.20611 7.27565 4.82054 6.66421 4.86051C6.30768 4.88381 5.85218 4.90454 5.27458 4.91721C5.25431 6.44907 5.19731 7.89731 5.15501 8.62757C5.12785 9.09694 4.85251 9.27534 4.40931 9.31667C4.30101 9.32681 4.17955 9.33301 4.04461 9.33301C3.89498 9.33301 3.76191 9.32537 3.64495 9.31324C3.22118 9.26934 2.95208 9.11447 2.91271 8.66634C2.84901 7.94094 2.76098 6.47654 2.73001 4.91727C2.15091 4.90464 1.69441 4.88387 1.33718 4.86051C0.725647 4.82054 0.464181 4.20594 0.845514 3.69904C1.10271 3.35717 1.44715 2.92421 1.90315 2.39208C2.60261 1.57581 3.12715 1.10954 3.47671 0.847409C3.79868 0.605975 4.20231 0.606009 4.52428 0.847442C4.87381 1.10961 5.39835 1.57584 6.09788 2.39208C6.55408 2.92434 6.89861 3.35737 7.15581 3.69931Z"
        fill="#101E2C"
      />
    </svg>
  );
};

export default ArrowUp;