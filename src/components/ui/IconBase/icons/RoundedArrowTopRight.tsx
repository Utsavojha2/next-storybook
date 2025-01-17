import React, { FC } from "react";

export const RoundedArrowTopRight: FC = (
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
        d="M10.5858 9.17157H13.8284C14.3807 9.17157 14.8284 9.61929 14.8284 10.1716V13.4142M14.1213 9.87868L9.17157 14.8284M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

RoundedArrowTopRight.displayName = "arrowTopRightRounded";
