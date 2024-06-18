import React, { FC } from "react";

export const ChevronTop: FC = (
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
        d="M5 15L11.2191 9.66939C11.6684 9.2842 12.3316 9.2842 12.7809 9.66939L19 15"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

ChevronTop.displayName = "chevronTop";
