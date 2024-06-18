import React, { FC } from "react";

export const ArrowTop: FC = (props: React.ComponentPropsWithoutRef<"svg">) => {
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
        d="M8 8.00003L11.2929 4.70714C11.6834 4.31661 12.3166 4.31661 12.7071 4.70714L16 8.00003M12 5.00003L12 19"
        stroke="#717171"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

ArrowTop.displayName = "arrowTop";
