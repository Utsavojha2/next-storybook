import React, { FC } from "react";

export const SquareChevronLeft: FC = (
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
        d="M13 9L10.7071 11.2929C10.3166 11.6834 10.3166 12.3166 10.7071 12.7071L13 15M7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22Z"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

SquareChevronLeft.displayName = "chevronLeftSquare";
