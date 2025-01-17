import React, { FC } from "react";

export const SquareArrowRight: FC = (
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
        d="M13 15L15.2929 12.7071C15.6834 12.3166 15.6834 11.6834 15.2929 11.2929L13 9M15 12L8 12M17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22Z"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

SquareArrowRight.displayName = "arrowRightSquare";
