import React, { FC } from "react";

export const ArrowBottomLeft: FC = (
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
        d="M11.8536 17.3029H7.19678C6.64449 17.3029 6.19678 16.8552 6.19678 16.3029L6.19678 11.646M6.90388 16.5958L16.8034 6.69629"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

ArrowBottomLeft.displayName = "arrowBottomLeft";
