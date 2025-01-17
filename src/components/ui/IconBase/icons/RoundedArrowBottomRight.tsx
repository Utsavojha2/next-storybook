import React, { FC } from "react";

export const RoundedArrowBottomRight: FC = (
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
        d="M10.5858 14.8284H13.8284C14.3807 14.8284 14.8284 14.3807 14.8284 13.8284V10.5858M14.1213 14.1213L9.17157 9.17157M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

RoundedArrowBottomRight.displayName = "arrowBottomRightRounded";
