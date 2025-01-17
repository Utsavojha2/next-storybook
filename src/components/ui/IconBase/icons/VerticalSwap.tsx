import React, { FC } from "react";

export const VerticalSwap: FC = (
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
        d="M5 8.00003L7.29289 5.70714C7.68342 5.31661 8.31658 5.31661 8.70711 5.70714L11 8.00003M8 6.00003L8 18M14 17L16.2929 19.2929C16.6834 19.6835 17.3166 19.6835 17.7071 19.2929L20 17M17 19V7.00003"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

VerticalSwap.displayName = "verticalSwap";
