import React, { FC } from "react";

export const HorizontalSwap: FC = (
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
        d="M7.99985 19L5.70696 16.7071C5.31643 16.3166 5.31643 15.6834 5.70696 15.2929L7.99985 13M5.99985 16L17.9998 16M16.9999 10L19.2927 7.70711C19.6833 7.31658 19.6833 6.68342 19.2927 6.29289L16.9999 4M18.9999 7L6.99985 7"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

HorizontalSwap.displayName = "horizontalSwap";
