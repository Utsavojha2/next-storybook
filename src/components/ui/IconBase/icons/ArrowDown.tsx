import React, { FC } from "react";

export const ArrowDown: FC = (props: React.ComponentPropsWithoutRef<"svg">) => {
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
        d="M8 15.9999L11.2929 19.2928C11.6834 19.6834 12.3166 19.6834 12.7071 19.2928L16 15.9999M12 18.9999L12 4.99994"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

ArrowDown.displayName = "arrowDown";
