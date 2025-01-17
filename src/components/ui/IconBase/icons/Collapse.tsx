import React, { FC } from "react";

export const Collapse: FC = (props: React.ComponentPropsWithoutRef<"svg">) => {
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
        d="M5.84611 13.5382L9.4615 13.5382C10.0138 13.5382 10.4615 13.9859 10.4615 14.5382L10.4615 18.1535"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M9.69224 14.3073L4.30762 19.6919"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13.5382 5.84654L13.5382 9.46193C13.5382 10.0142 13.9859 10.4619 14.5382 10.4619L18.1535 10.4619"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14.3073 9.69266L19.6919 4.30804"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

Collapse.displayName = "collapse";
