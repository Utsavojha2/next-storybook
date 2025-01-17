import React, { FC } from "react";

export const ArrowLeft: FC = (props: React.ComponentPropsWithoutRef<"svg">) => {
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
        d="M7.99985 8L4.70696 11.2929C4.31643 11.6834 4.31643 12.3166 4.70696 12.7071L7.99985 16M4.99985 12L18.9998 12"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

ArrowLeft.displayName = "arrowLeft";
