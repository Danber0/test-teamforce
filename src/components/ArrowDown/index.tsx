import React, { FC } from "react";

interface ArrowDownProps {
  onClick: (e: any) => void;
}

const ArrowDown: FC<ArrowDownProps> = ({ onClick }) => {
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
        d="M7.15581 6.30069C7.53708 5.79389 7.27565 5.17946 6.66421 5.13949C6.30768 5.11619 5.85218 5.09546 5.27458 5.08279C5.25431 3.55093 5.19731 2.10269 5.15501 1.37243C5.12785 0.903059 4.85251 0.724659 4.40931 0.683325C4.30101 0.673192 4.17955 0.666992 4.04461 0.666992C3.89498 0.666992 3.76191 0.674626 3.64495 0.686759C3.22118 0.730659 2.95208 0.885525 2.91271 1.33366C2.84901 2.05906 2.76098 3.52346 2.73001 5.08273C2.15091 5.09536 1.69441 5.11613 1.33718 5.13949C0.725647 5.17946 0.464181 5.79406 0.845514 6.30096C1.10271 6.64283 1.44715 7.07579 1.90315 7.60792C2.60261 8.42419 3.12715 8.89046 3.47671 9.15259C3.79868 9.39402 4.20231 9.39399 4.52428 9.15256C4.87381 8.89039 5.39835 8.42416 6.09788 7.60792C6.55408 7.07566 6.89861 6.64263 7.15581 6.30069Z"
        fill="#101E2C"
      />
    </svg>
  );
};

export default ArrowDown;
