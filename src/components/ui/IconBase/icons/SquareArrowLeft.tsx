import React, { FC } from "react";

export const SquareArrowLeft: FC = (
  props: React.ComponentPropsWithoutRef<"svg">
) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 9L8.70711 11.2929C8.31658 11.6834 8.31658 12.3166 8.70711 12.7071L11 15M9 12H16M7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22Z"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

SquareArrowLeft.displayName = "arrowLeftSquare";
