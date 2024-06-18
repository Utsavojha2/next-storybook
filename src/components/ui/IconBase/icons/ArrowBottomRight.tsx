import React, { FC } from "react";

export const ArrowBottomRight: FC = (
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
        d="M12.1465 17.3029H16.8034C17.3557 17.3029 17.8034 16.8552 17.8034 16.3029V11.646M17.0963 16.5958L7.19678 6.69629"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

ArrowBottomRight.displayName = "arrowBottomRight";
