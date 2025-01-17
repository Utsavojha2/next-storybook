import React, { FC } from "react";

export const RoundedArrowBottomLeft: FC = (
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
        d="M13.4142 14.8284H10.1716C9.61929 14.8284 9.17157 14.3807 9.17157 13.8284V10.5858M9.87868 14.1213L14.8284 9.17157M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

RoundedArrowBottomLeft.displayName = "arrowBottomLeftRounded";
