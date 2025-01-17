import React, { FC } from "react";

export const ArrowTopRight: FC = (
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
        d="M12.1465 6.69666L16.8034 6.69666C17.3557 6.69666 17.8034 7.14437 17.8034 7.69666V12.3535M17.0963 7.40377L7.19678 17.3033"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

ArrowTopRight.displayName = "arrowTopRight";
