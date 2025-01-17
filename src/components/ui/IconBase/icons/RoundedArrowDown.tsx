import React, { FC } from "react";

export const RoundedArrowDown: FC = (
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
        d="M9 13L11.2929 15.2929C11.6834 15.6834 12.3166 15.6834 12.7071 15.2929L15 13M12 15V8M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

RoundedArrowDown.displayName = "arrowDownRounded";
