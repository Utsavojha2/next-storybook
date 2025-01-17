import React, { FC } from "react";

export const RoundedArrowTopLeft: FC = (
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
        d="M13.4142 9.17157H10.1716C9.61929 9.17157 9.17157 9.61929 9.17157 10.1716V13.4142M9.87868 9.87868L14.8284 14.8284M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

RoundedArrowTopLeft.displayName = "arrowTopLeftRounded";
