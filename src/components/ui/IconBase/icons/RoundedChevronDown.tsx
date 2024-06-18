import React, { FC } from "react";

export const RoundedChevronDown: FC = (
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
        d="M9 13L11.2929 15.2929C11.6834 15.6834 12.3166 15.6834 12.7071 15.2929L15 13M12 15V8M2 17L2 7C2 4.23858 4.23858 2 7 2L17 2C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17Z"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

RoundedChevronDown.displayName = "chevronDownRounded";