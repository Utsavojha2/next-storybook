import React, { FC } from "react";

export const Expand: FC = (props: React.ComponentPropsWithoutRef<"svg">) => {
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
        d="M8.61539 19.3846L5 19.3846C4.44772 19.3846 4 18.9369 4 18.3846L4 14.7692M4.76918 18.6155L10.1538 13.2309M19.3844 8.61514L19.3844 4.99976C19.3844 4.44747 18.9367 3.99976 18.3844 3.99976L14.769 3.99976M18.6152 4.76902L13.2305 10.1536"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Expand.displayName = "expand";
