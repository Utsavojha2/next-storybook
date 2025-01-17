import React, { FC } from "react";

export const ArrowTopLeft: FC = (
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
        d="M11.8536 6.69684L7.19678 6.69684C6.64449 6.69684 6.19678 7.14455 6.19678 7.69684L6.19678 12.3537M6.90388 7.40395L16.8034 17.3034"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

ArrowTopLeft.displayName = "arrowTopLeft";
